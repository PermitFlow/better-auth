import { A as AdapterDebugLogs, B as BetterAuthOptions, a as Adapter } from '../../shared/better-auth.jTQrz0eG.mjs';
import { Db } from 'mongodb';
import '../../shared/better-auth.9XhOL8gb.mjs';
import 'zod';
import '../../shared/better-auth.uZ__EClU.mjs';
import 'kysely';
import 'better-call';
import 'better-sqlite3';
import 'bun:sqlite';

interface MongoDBAdapterConfig {
    /**
     * Enable debug logs for the adapter
     *
     * @default false
     */
    debugLogs?: AdapterDebugLogs;
    /**
     * Use plural table names
     *
     * @default false
     */
    usePlural?: boolean;
}
declare const mongodbAdapter: (db: Db, config?: MongoDBAdapterConfig) => (options: BetterAuthOptions) => Adapter;

export { mongodbAdapter };
export type { MongoDBAdapterConfig };
