export { L as Account, a as Adapter, Q as AdapterInstance, P as AdapterSchemaCreation, J as AdditionalSessionFieldsInput, u as AdditionalSessionFieldsOutput, y as AdditionalUserFieldsInput, v as AdditionalUserFieldsOutput, n as Auth, p as AuthContext, g as AuthPluginSchema, B as BetterAuthOptions, h as BetterAuthPlugin, F as FilterActions, X as FilteredAPI, G as GenericEndpointContext, H as HookEndpointContext, t as InferAPI, I as InferOptionSchema, i as InferPluginErrorCodes, z as InferPluginTypes, r as InferSession, Y as InferSessionAPI, q as InferUser, a1 as LogHandlerParams, Z as LogLevel, a0 as Logger, M as Models, R as RateLimit, T as SecondaryStorage, S as Session, U as User, V as Verification, O as Where, W as WithJsDoc, E as betterAuth, a2 as createLogger, N as init, _ as levels, a3 as logger, $ as shouldPublishLog } from './shared/better-auth.Nl2UAmQc.mjs';
export { A as AtomListener, B as BetterAuthClientPlugin, C as ClientOptions, b as InferActions, h as InferAdditionalFromClient, a as InferClientAPI, c as InferErrorCodes, e as InferPluginsFromClient, f as InferSessionFromClient, g as InferUserFromClient, I as IsSignal, S as Store } from './shared/better-auth.DApgpj9N.mjs';
export { H as HIDE_METADATA } from './shared/better-auth.DEHJp1rk.mjs';
export { g as generateState, p as parseState } from './shared/better-auth.Cy-GJ8xD.mjs';
export * from 'better-call';
export * from 'zod';
export { D as DeepPartial, E as Expand, H as HasRequiredKeys, b as LiteralNumber, L as LiteralString, d as LiteralUnion, O as OmitId, c as PreserveJSDoc, a as Prettify, P as PrettifyDeep, R as RequiredKeysOf, S as StripEmptyObjects, U as UnionToIntersection, W as WithoutEmpty } from './shared/better-auth.9XhOL8gb.mjs';
export { O as OAuth2Tokens, a as OAuthProvider, P as ProviderOptions } from './shared/better-auth.uZ__EClU.mjs';
import 'kysely';
import 'better-sqlite3';
import 'bun:sqlite';
import '@better-fetch/fetch';
import 'nanostores';

declare function capitalizeFirstLetter(str: string): string;

declare const generateId: (size?: number) => string;

declare class BetterAuthError extends Error {
    constructor(message: string, cause?: string);
}
declare class MissingDependencyError extends BetterAuthError {
    constructor(pkgName: string);
}

export { BetterAuthError, MissingDependencyError, capitalizeFirstLetter, generateId };
