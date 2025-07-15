import { sso } from './index.mjs';
import 'better-auth';
import 'zod';

declare const ssoClient: () => {
    id: "sso-client";
    $InferServerPlugin: ReturnType<typeof sso>;
};

export { ssoClient };
