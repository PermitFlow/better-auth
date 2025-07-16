import 'better-call';
import { f as createAuthMiddleware } from '../shared/better-auth.BOAoJXX4.mjs';
import 'zod';
import '../shared/better-auth.8zoxzg-F.mjs';
import '@better-auth/utils/base64';
import '@better-auth/utils/hmac';
import '@better-auth/utils/binary';
import { parseSetCookieHeader } from '../cookies/index.mjs';
import '../shared/better-auth.DSIZrW7f.mjs';
import '../shared/better-auth.DBGfIDnh.mjs';
import 'defu';
import '@better-auth/utils/hash';
import '@better-fetch/fetch';
import 'jose';
import '@noble/ciphers/chacha';
import '@noble/ciphers/utils';
import '@noble/ciphers/webcrypto';
import '@noble/hashes/scrypt';
import '@better-auth/utils';
import '@better-auth/utils/hex';
import '@noble/hashes/utils';
import '../shared/better-auth.B4Qoxdgc.mjs';
import '@better-auth/utils/random';
import '../shared/better-auth.VTXNLFMT.mjs';
import '../shared/better-auth.DdzSJf-n.mjs';
import '../shared/better-auth.CW6D9eSx.mjs';
import '../shared/better-auth.tB5eU6EY.mjs';
import '../shared/better-auth.DDEbWX-S.mjs';
import 'jose/errors';

let isBuilding;
const toSvelteKitHandler = (auth) => {
  return (event) => auth.handler(event.request);
};
const svelteKitHandler = async ({
  auth,
  event,
  resolve
}) => {
  if (isBuilding === void 0) {
    const { building } = await import('$app/environment').catch((e) => {
    }).then((m) => m || {});
    isBuilding = building || false;
  }
  if (isBuilding) {
    return resolve(event);
  }
  const { request, url } = event;
  if (isAuthPath(url.toString(), auth.options)) {
    return auth.handler(request);
  }
  return resolve(event);
};
function isAuthPath(url, options) {
  const _url = new URL(url);
  const baseURL = new URL(
    `${options.baseURL || _url.origin}${options.basePath || "/api/auth"}`
  );
  if (_url.origin !== baseURL.origin) return false;
  if (!_url.pathname.startsWith(
    baseURL.pathname.endsWith("/") ? baseURL.pathname : `${baseURL.pathname}/`
  ))
    return false;
  return true;
}
const sveltekitCookies = () => {
  return {
    id: "sveltekit-cookies",
    hooks: {
      after: [
        {
          matcher() {
            return true;
          },
          handler: createAuthMiddleware(async (ctx) => {
            const returned = ctx.context.responseHeaders;
            if ("_flag" in ctx && ctx._flag === "router") {
              return;
            }
            if (returned instanceof Headers) {
              const setCookies = returned?.get("set-cookie");
              if (!setCookies) return;
              const { getRequestEvent } = await import('$app/server');
              const event = await getRequestEvent();
              if (!event) return;
              const parsed = parseSetCookieHeader(setCookies);
              for (const [name, { value, ...ops }] of parsed) {
                event.cookies.set(name, decodeURIComponent(value), {
                  sameSite: ops.samesite,
                  path: ops.path || "/",
                  expires: ops.expires,
                  secure: ops.secure,
                  httpOnly: ops.httponly,
                  domain: ops.domain,
                  maxAge: ops["max-age"]
                });
              }
            }
          })
        }
      ]
    }
  };
};

export { isAuthPath, svelteKitHandler, sveltekitCookies, toSvelteKitHandler };
