import { b as AdapterConfig, C as CreateCustomAdapter, B as BetterAuthOptions, a as Adapter } from '../shared/better-auth.CePDkaef.js';
export { A as AdapterDebugLogs, e as AdapterTestDebugLogs, d as CleanedWhere, c as CustomAdapter } from '../shared/better-auth.CePDkaef.js';
import '../shared/better-auth.9XhOL8gb.js';
import 'zod';
import '../shared/better-auth.R7C454Vo.js';
import 'kysely';
import 'better-call';
import 'better-sqlite3';
import 'bun:sqlite';

declare const createAdapter: ({ adapter, config: cfg, }: {
    config: AdapterConfig;
    adapter: CreateCustomAdapter;
}) => (options: BetterAuthOptions) => Adapter;

export { AdapterConfig, CreateCustomAdapter, createAdapter };
