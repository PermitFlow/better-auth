import { z } from 'zod';
import { i as createAuthEndpoint, o as originCheck, B as BASE_ERROR_CODES } from '../../shared/better-auth.BOAoJXX4.mjs';
import { APIError } from 'better-call';
import { setSessionCookie } from '../../cookies/index.mjs';
import { createHash } from '@better-auth/utils/hash';
import '@noble/ciphers/chacha';
import '@noble/ciphers/utils';
import '@noble/ciphers/webcrypto';
import { base64Url } from '@better-auth/utils/base64';
import 'jose';
import '@noble/hashes/scrypt';
import '@better-auth/utils';
import '@better-auth/utils/hex';
import '@noble/hashes/utils';
import { g as generateRandomString } from '../../shared/better-auth.B4Qoxdgc.mjs';
import '../../shared/better-auth.DSIZrW7f.mjs';
import '../../shared/better-auth.8zoxzg-F.mjs';
import '../../shared/better-auth.DBGfIDnh.mjs';
import 'defu';
import '@better-fetch/fetch';
import '../../shared/better-auth.VTXNLFMT.mjs';
import '../../shared/better-auth.DdzSJf-n.mjs';
import '../../shared/better-auth.CW6D9eSx.mjs';
import '../../shared/better-auth.tB5eU6EY.mjs';
import '@better-auth/utils/hmac';
import '@better-auth/utils/binary';
import '../../shared/better-auth.DDEbWX-S.mjs';
import 'jose/errors';
import '@better-auth/utils/random';

const defaultKeyHasher = async (otp) => {
  const hash = await createHash("SHA-256").digest(
    new TextEncoder().encode(otp)
  );
  const hashed = base64Url.encode(new Uint8Array(hash), {
    padding: false
  });
  return hashed;
};

const magicLink = (options) => {
  const opts = {
    storeToken: "plain",
    ...options
  };
  async function storeToken(ctx, token) {
    if (opts.storeToken === "hashed") {
      return await defaultKeyHasher(token);
    }
    if (typeof opts.storeToken === "object" && "type" in opts.storeToken && opts.storeToken.type === "custom-hasher") {
      return await opts.storeToken.hash(token);
    }
    return token;
  }
  return {
    id: "magic-link",
    endpoints: {
      signInMagicLink: createAuthEndpoint(
        "/sign-in/magic-link",
        {
          method: "POST",
          requireHeaders: true,
          body: z.object({
            email: z.string({
              description: "Email address to send the magic link"
            }).email(),
            name: z.string({
              description: "User display name. Only used if the user is registering for the first time."
            }).optional(),
            callbackURL: z.string({
              description: "URL to redirect after magic link verification"
            }).optional()
          }),
          metadata: {
            openapi: {
              description: "Sign in with magic link",
              responses: {
                200: {
                  description: "Success",
                  content: {
                    "application/json": {
                      schema: {
                        type: "object",
                        properties: {
                          status: {
                            type: "boolean"
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        async (ctx) => {
          const { email } = ctx.body;
          if (opts.disableSignUp) {
            const user = await ctx.context.internalAdapter.findUserByEmail(email);
            if (!user) {
              throw new APIError("BAD_REQUEST", {
                message: BASE_ERROR_CODES.USER_NOT_FOUND
              });
            }
          }
          const verificationToken = opts?.generateToken ? await opts.generateToken(email) : generateRandomString(32, "a-z", "A-Z");
          const storedToken = await storeToken(ctx, verificationToken);
          await ctx.context.internalAdapter.createVerificationValue(
            {
              identifier: storedToken,
              value: JSON.stringify({ email, name: ctx.body.name }),
              expiresAt: new Date(
                Date.now() + (opts.expiresIn || 60 * 5) * 1e3
              )
            },
            ctx
          );
          const url = `${ctx.context.baseURL}/magic-link/verify?token=${verificationToken}&callbackURL=${encodeURIComponent(
            ctx.body.callbackURL || "/"
          )}`;
          await opts.sendMagicLink(
            {
              email,
              url,
              token: verificationToken
            },
            ctx.request
          );
          return ctx.json({
            status: true
          });
        }
      ),
      magicLinkVerify: createAuthEndpoint(
        "/magic-link/verify",
        {
          method: "GET",
          query: z.object({
            token: z.string({
              description: "Verification token"
            }),
            callbackURL: z.string({
              description: "URL to redirect after magic link verification, if not provided will return session"
            }).optional()
          }),
          use: [
            originCheck((ctx) => {
              return ctx.query.callbackURL ? decodeURIComponent(ctx.query.callbackURL) : "/";
            })
          ],
          requireHeaders: true,
          metadata: {
            openapi: {
              description: "Verify magic link",
              responses: {
                200: {
                  description: "Success",
                  content: {
                    "application/json": {
                      schema: {
                        type: "object",
                        properties: {
                          session: {
                            $ref: "#/components/schemas/Session"
                          },
                          user: {
                            $ref: "#/components/schemas/User"
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        async (ctx) => {
          const token = ctx.query.token;
          const callbackURL = ctx.query.callbackURL ? decodeURIComponent(ctx.query.callbackURL) : "/";
          const toRedirectTo = callbackURL?.startsWith("http") ? callbackURL : callbackURL ? `${ctx.context.options.baseURL}${callbackURL}` : ctx.context.options.baseURL;
          const storedToken = await storeToken(ctx, token);
          const tokenValue = await ctx.context.internalAdapter.findVerificationValue(
            storedToken
          );
          if (!tokenValue) {
            throw ctx.redirect(`${toRedirectTo}?error=INVALID_TOKEN`);
          }
          if (tokenValue.expiresAt < /* @__PURE__ */ new Date()) {
            await ctx.context.internalAdapter.deleteVerificationValue(
              tokenValue.id
            );
            throw ctx.redirect(`${toRedirectTo}?error=EXPIRED_TOKEN`);
          }
          await ctx.context.internalAdapter.deleteVerificationValue(
            tokenValue.id
          );
          const { email, name } = JSON.parse(tokenValue.value);
          let user = await ctx.context.internalAdapter.findUserByEmail(email).then((res) => res?.user);
          if (!user) {
            if (!opts.disableSignUp) {
              const newUser = await ctx.context.internalAdapter.createUser(
                {
                  email,
                  emailVerified: true,
                  name: name || ""
                },
                ctx
              );
              user = newUser;
              if (!user) {
                throw ctx.redirect(
                  `${toRedirectTo}?error=failed_to_create_user`
                );
              }
            } else {
              throw ctx.redirect(
                `${toRedirectTo}?error=new_user_signup_disabled`
              );
            }
          }
          if (!user.emailVerified) {
            await ctx.context.internalAdapter.updateUser(
              user.id,
              {
                emailVerified: true
              },
              ctx
            );
          }
          const session = await ctx.context.internalAdapter.createSession(
            user.id,
            ctx
          );
          if (!session) {
            throw ctx.redirect(
              `${toRedirectTo}?error=failed_to_create_session`
            );
          }
          await setSessionCookie(ctx, {
            session,
            user
          });
          if (!ctx.query.callbackURL) {
            return ctx.json({
              token: session.token,
              user: {
                id: user.id,
                email: user.email,
                emailVerified: user.emailVerified,
                name: user.name,
                image: user.image,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
              }
            });
          }
          throw ctx.redirect(callbackURL);
        }
      )
    },
    rateLimit: [
      {
        pathMatcher(path) {
          return path.startsWith("/sign-in/magic-link") || path.startsWith("/magic-link/verify");
        },
        window: opts.rateLimit?.window || 60,
        max: opts.rateLimit?.max || 5
      }
    ]
  };
};

export { magicLink };
