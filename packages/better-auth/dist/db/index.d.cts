import { a as Adapter, B as BetterAuthOptions, G as GenericEndpointContext, O as Where, a4 as FieldAttribute, a5 as FieldType, K as KyselyDatabaseType } from '../shared/better-auth.CD18bxAh.cjs';
export { af as BetterAuthDbSchema, a8 as FieldAttributeConfig, x as InferFieldsFromOptions, w as InferFieldsFromPlugins, ac as InferFieldsInput, ad as InferFieldsInputClient, ab as InferFieldsOutput, aa as InferValueType, a7 as InternalAdapter, ae as PluginFieldAttribute, ah as accountSchema, a9 as createFieldAttribute, a6 as createInternalAdapter, am as getAllFields, ag as getAuthTables, av as mergeSchema, at as parseAccountInput, ao as parseAccountOutput, as as parseAdditionalUserInput, aq as parseInputData, al as parseOutputData, au as parseSessionInput, ap as parseSessionOutput, ar as parseUserInput, an as parseUserOutput, aj as sessionSchema, ai as userSchema, ak as verificationSchema } from '../shared/better-auth.CD18bxAh.cjs';
import { z } from 'zod';
import '../shared/better-auth.9XhOL8gb.cjs';
import '../shared/better-auth.48LtINOO.cjs';
import 'kysely';
import 'better-call';
import 'better-sqlite3';
import 'bun:sqlite';

declare function getWithHooks(adapter: Adapter, ctx: {
    options: BetterAuthOptions;
    hooks: Exclude<BetterAuthOptions["databaseHooks"], undefined>[];
}): {
    createWithHooks: <T extends Record<string, any>>(data: T, model: "user" | "account" | "session" | "verification", customCreateFn?: {
        fn: (data: Record<string, any>) => void | Promise<any>;
        executeMainFn?: boolean;
    }, context?: GenericEndpointContext) => Promise<any>;
    updateWithHooks: <T extends Record<string, any>>(data: any, where: Where[], model: "user" | "account" | "session" | "verification", customUpdateFn?: {
        fn: (data: Record<string, any>) => void | Promise<any>;
        executeMainFn?: boolean;
    }, context?: GenericEndpointContext) => Promise<any>;
    updateManyWithHooks: <T extends Record<string, any>>(data: any, where: Where[], model: "user" | "account" | "session" | "verification", customUpdateFn?: {
        fn: (data: Record<string, any>) => void | Promise<any>;
        executeMainFn?: boolean;
    }, context?: GenericEndpointContext) => Promise<any>;
};

declare function toZodSchema(fields: Record<string, FieldAttribute>): z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;

declare function getAdapter(options: BetterAuthOptions): Promise<Adapter>;
declare function convertToDB<T extends Record<string, any>>(fields: Record<string, FieldAttribute>, values: T): T;
declare function convertFromDB<T extends Record<string, any>>(fields: Record<string, FieldAttribute>, values: T | null): T | null;

declare function matchType(columnDataType: string, fieldType: FieldType, dbType: KyselyDatabaseType): boolean;
declare function getMigrations(config: BetterAuthOptions): Promise<{
    toBeCreated: {
        table: string;
        fields: Record<string, FieldAttribute>;
        order: number;
    }[];
    toBeAdded: {
        table: string;
        fields: Record<string, FieldAttribute>;
        order: number;
    }[];
    runMigrations: () => Promise<void>;
    compileMigrations: () => Promise<string>;
}>;

declare function getSchema(config: BetterAuthOptions): Record<string, {
    fields: Record<string, FieldAttribute>;
    order: number;
}>;

export { FieldAttribute, FieldType, convertFromDB, convertToDB, getAdapter, getMigrations, getSchema, getWithHooks, matchType, toZodSchema };
