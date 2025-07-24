import * as http from 'http';
import { IncomingHttpHeaders } from 'http';
import { n as Auth } from '../shared/better-auth.BQC-NzgW.mjs';
import '../shared/better-auth.9XhOL8gb.mjs';
import 'zod';
import '../shared/better-auth.uZ__EClU.mjs';
import 'kysely';
import 'better-call';
import 'better-sqlite3';
import 'bun:sqlite';

declare const toNodeHandler: (auth: {
    handler: Auth["handler"];
} | Auth["handler"]) => (req: http.IncomingMessage, res: http.ServerResponse) => Promise<void>;
declare function fromNodeHeaders(nodeHeaders: IncomingHttpHeaders): Headers;

export { fromNodeHeaders, toNodeHandler };
