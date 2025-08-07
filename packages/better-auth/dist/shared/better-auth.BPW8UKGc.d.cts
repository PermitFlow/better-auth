import { G as GenericEndpointContext } from './better-auth.DVVfa9lx.cjs';

declare function generateState(c: GenericEndpointContext, link?: {
    email: string;
    userId: string;
}): Promise<{
    state: string;
    codeVerifier: string;
}>;
declare function parseState(c: GenericEndpointContext): Promise<{
    expiresAt: number;
    codeVerifier: string;
    callbackURL: string;
    requestSignUp?: boolean | undefined;
    link?: {
        userId: string;
        email: string;
    } | undefined;
    errorURL?: string | undefined;
    newUserURL?: string | undefined;
}>;

export { generateState as g, parseState as p };
