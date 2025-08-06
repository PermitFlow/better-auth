'use strict';

const socialProviders_index = require('../shared/better-auth.NkaczwoG.cjs');
require('zod');
require('better-call');
require('@better-auth/utils/hash');
require('@better-auth/utils/base64');
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
require('../shared/better-auth.DiSjtgs9.cjs');
require('../shared/better-auth.ANpbi45u.cjs');
require('../cookies/index.cjs');
require('../shared/better-auth.C1hdVENX.cjs');
require('@better-auth/utils/hmac');
require('../shared/better-auth.D3mtHEZg.cjs');
require('@better-auth/utils/binary');
require('../shared/better-auth.BMYo0QR-.cjs');
require('jose/errors');
require('../shared/better-auth.CXhVNgXP.cjs');
require('../shared/better-auth.DcWKCjjf.cjs');
require('defu');



exports.createAuthorizationURL = socialProviders_index.createAuthorizationURL;
exports.encodeOAuthParameter = socialProviders_index.encodeOAuthParameter;
exports.generateCodeChallenge = socialProviders_index.generateCodeChallenge;
exports.generateState = socialProviders_index.generateState;
exports.getOAuth2Tokens = socialProviders_index.getOAuth2Tokens;
exports.handleOAuthUserInfo = socialProviders_index.handleOAuthUserInfo;
exports.parseState = socialProviders_index.parseState;
exports.refreshAccessToken = socialProviders_index.refreshAccessToken;
exports.validateAuthorizationCode = socialProviders_index.validateAuthorizationCode;
exports.validateToken = socialProviders_index.validateToken;
