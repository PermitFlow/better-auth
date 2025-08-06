import { P as ProviderOptions, O as OAuth2Tokens } from '../shared/better-auth.48LtINOO.cjs';
export { a as OAuthProvider } from '../shared/better-auth.48LtINOO.cjs';
import * as jose from 'jose';
export { g as generateState, p as parseState } from '../shared/better-auth.ig3zOWIH.cjs';
import { G as GenericEndpointContext, U as User, L as Account } from '../shared/better-auth.C1FOcFBf.cjs';
import '../shared/better-auth.9XhOL8gb.cjs';
import 'zod';
import 'kysely';
import 'better-call';
import 'better-sqlite3';
import 'bun:sqlite';

declare function createAuthorizationURL({ id, options, authorizationEndpoint, state, codeVerifier, scopes, claims, redirectURI, duration, prompt, accessType, responseType, display, loginHint, hd, responseMode, additionalParams, scopeJoiner, }: {
    id: string;
    options: ProviderOptions;
    redirectURI: string;
    authorizationEndpoint: string;
    state: string;
    codeVerifier?: string;
    scopes: string[];
    claims?: string[];
    duration?: string;
    prompt?: string;
    accessType?: string;
    responseType?: string;
    display?: string;
    loginHint?: string;
    hd?: string;
    responseMode?: string;
    additionalParams?: Record<string, string>;
    scopeJoiner?: string;
}): Promise<URL>;

declare function validateAuthorizationCode({ code, codeVerifier, redirectURI, options, tokenEndpoint, authentication, deviceId, headers, }: {
    code: string;
    redirectURI: string;
    options: ProviderOptions;
    codeVerifier?: string;
    deviceId?: string;
    tokenEndpoint: string;
    authentication?: "basic" | "post";
    headers?: Record<string, string>;
}): Promise<OAuth2Tokens>;
declare function validateToken(token: string, jwksEndpoint: string): Promise<jose.JWTVerifyResult<jose.JWTPayload>>;

declare function refreshAccessToken({ refreshToken, options, tokenEndpoint, authentication, extraParams, grantType, }: {
    refreshToken: string;
    options: ProviderOptions;
    tokenEndpoint: string;
    authentication?: "basic" | "post";
    extraParams?: Record<string, string>;
    grantType?: string;
}): Promise<OAuth2Tokens>;

declare function generateCodeChallenge(codeVerifier: string): Promise<string>;
declare function getOAuth2Tokens(data: Record<string, any>): OAuth2Tokens;
declare const encodeOAuthParameter: (value: string) => string;

declare function handleOAuthUserInfo(c: GenericEndpointContext, { userInfo, account, callbackURL, disableSignUp, overrideUserInfo, }: {
    userInfo: Omit<User, "createdAt" | "updatedAt">;
    account: Omit<Account, "id" | "userId" | "createdAt" | "updatedAt">;
    callbackURL?: string;
    disableSignUp?: boolean;
    overrideUserInfo?: boolean;
}): Promise<{
    error: string;
    data: null;
    isRegister?: undefined;
} | {
    error: string;
    data: null;
    isRegister: boolean;
} | {
    data: {
        session: {
            id: string;
            userId: string;
            expiresAt: Date;
            createdAt: Date;
            updatedAt: Date;
            token: string;
            ipAddress?: string | null | undefined;
            userAgent?: string | null | undefined;
        };
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            name: string;
            image?: string | null | undefined;
        };
    };
    error: null;
    isRegister: boolean;
}>;

export { OAuth2Tokens, ProviderOptions, createAuthorizationURL, encodeOAuthParameter, generateCodeChallenge, getOAuth2Tokens, handleOAuthUserInfo, refreshAccessToken, validateAuthorizationCode, validateToken };
