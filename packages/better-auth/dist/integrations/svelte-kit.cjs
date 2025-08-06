'use strict';

require('better-call');
const socialProviders_index = require('../shared/better-auth.NkaczwoG.cjs');
require('zod');
require('../shared/better-auth.DiSjtgs9.cjs');
require('@better-auth/utils/base64');
require('@better-auth/utils/hmac');
require('@better-auth/utils/binary');
const cookies_index = require('../cookies/index.cjs');
require('../shared/better-auth.DcWKCjjf.cjs');
require('../shared/better-auth.CXhVNgXP.cjs');
require('defu');
require('@better-auth/utils/hash');
require('@better-fetch/fetch');
require('jose');
require('@noble/ciphers/chacha');
require('@noble/ciphers/utils');
require('@noble/ciphers/webcrypto');
require('@noble/hashes/scrypt');
require('@better-auth/utils');
require('@better-auth/utils/hex');
require('@noble/hashes/utils');
require('../shared/better-auth.CYeOI8C-.cjs');
require('@better-auth/utils/random');
require('../shared/better-auth.C-R0J0n1.cjs');
require('../shared/better-auth.ANpbi45u.cjs');
require('../shared/better-auth.C1hdVENX.cjs');
require('../shared/better-auth.D3mtHEZg.cjs');
require('../shared/better-auth.BMYo0QR-.cjs');
require('jose/errors');

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
          handler: socialProviders_index.createAuthMiddleware(async (ctx) => {
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
              const parsed = cookies_index.parseSetCookieHeader(setCookies);
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

exports.isAuthPath = isAuthPath;
exports.svelteKitHandler = svelteKitHandler;
exports.sveltekitCookies = sveltekitCookies;
exports.toSvelteKitHandler = toSvelteKitHandler;
