import * as better_call from 'better-call';
import { B as BetterAuthOptions } from '../shared/better-auth.BCiOEoWo.cjs';
import '../shared/better-auth.9XhOL8gb.cjs';
import 'zod';
import '../shared/better-auth.48LtINOO.cjs';
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
