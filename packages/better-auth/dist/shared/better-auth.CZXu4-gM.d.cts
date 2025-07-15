import { G as GenericEndpointContext } from './better-auth.DL5Y1GUu.cjs';

declare function generateState(c: GenericEndpointContext, link?: {
    email: string;
    userId: string;
}): Promise<{
    state: string;
    codeVerifier: string;
}>;
declare function parseState(c: GenericEndpointContext): Promise<{
    codeVerifier: string;
    expiresAt: number;
    callbackURL: string;
    link?: {
        email: string;
        userId: string;
    } | undefined;
    requestSignUp?: boolean | undefined;
    errorURL?: string | undefined;
    newUserURL?: string | undefined;
}>;

export { generateState as g, parseState as p };
