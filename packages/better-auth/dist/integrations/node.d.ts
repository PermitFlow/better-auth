import * as http from 'http';
import { IncomingHttpHeaders } from 'http';
import { n as Auth } from '../shared/better-auth.D8yupvwL.js';
import '../shared/better-auth.9XhOL8gb.js';
import 'zod';
import '../shared/better-auth.R7C454Vo.js';
import 'kysely';
import 'better-call';
import 'better-sqlite3';
import 'bun:sqlite';

declare const toNodeHandler: (auth: {
    handler: Auth["handler"];
} | Auth["handler"]) => (req: http.IncomingMessage, res: http.ServerResponse) => Promise<void>;
declare function fromNodeHeaders(nodeHeaders: IncomingHttpHeaders): Headers;

export { fromNodeHeaders, toNodeHandler };
