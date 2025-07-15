import { sso } from './index.js';
import 'better-auth';
import 'zod';

declare const ssoClient: () => {
    id: "sso-client";
    $InferServerPlugin: ReturnType<typeof sso>;
};

export { ssoClient };
