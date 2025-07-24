import * as better_call from 'better-call';
import { H as HookEndpointContext } from '../shared/better-auth.DKkfBZeo.js';
import '../shared/better-auth.9XhOL8gb.js';
import 'zod';
import '../shared/better-auth.R7C454Vo.js';
import 'kysely';
import 'better-sqlite3';
import 'bun:sqlite';

declare const reactStartCookies: () => {
    id: "react-start-cookies";
    hooks: {
        after: {
            matcher(ctx: HookEndpointContext): true;
            handler: (inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>;
        }[];
    };
};

export { reactStartCookies };
