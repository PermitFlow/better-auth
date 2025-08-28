import * as better_call from 'better-call';
import { B as BetterAuthOptions } from '../shared/better-auth.CtaKr0Wt.mjs';
import '../shared/better-auth.9XhOL8gb.mjs';
import 'zod';
import '../shared/better-auth.uZ__EClU.mjs';
import 'kysely';
import 'better-sqlite3';
import 'bun:sqlite';

declare const toSvelteKitHandler: (auth: {
    handler: (request: Request) => any;
    options: BetterAuthOptions;
}) => (event: {
    request: Request;
}) => any;
declare const svelteKitHandler: ({ auth, event, resolve, }: {
    auth: {
        handler: (request: Request) => any;
        options: BetterAuthOptions;
    };
    event: {
        request: Request;
        url: URL;
    };
    resolve: (event: any) => any;
}) => Promise<any>;
declare function isAuthPath(url: string, options: BetterAuthOptions): boolean;
declare const sveltekitCookies: () => {
    id: "sveltekit-cookies";
    hooks: {
        after: {
            matcher(): true;
            handler: (inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>;
        }[];
    };
};

export { isAuthPath, svelteKitHandler, sveltekitCookies, toSvelteKitHandler };
