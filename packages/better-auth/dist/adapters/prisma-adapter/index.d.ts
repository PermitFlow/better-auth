import { A as AdapterDebugLogs, B as BetterAuthOptions, a as Adapter } from '../../shared/better-auth.tRjLk99E.js';
import '../../shared/better-auth.9XhOL8gb.js';
import 'zod';
import '../../shared/better-auth.R7C454Vo.js';
import 'kysely';
import 'better-call';
import 'better-sqlite3';
import 'bun:sqlite';

interface PrismaConfig {
    /**
     * Database provider.
     */
    provider: "sqlite" | "cockroachdb" | "mysql" | "postgresql" | "sqlserver" | "mongodb";
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
    disableIdGeneration?: boolean;
}
interface PrismaClient {
}
declare const prismaAdapter: (prisma: PrismaClient, config: PrismaConfig) => (options: BetterAuthOptions) => Adapter;

export { prismaAdapter };
export type { PrismaConfig };
