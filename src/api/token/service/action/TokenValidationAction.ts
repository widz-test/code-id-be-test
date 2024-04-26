import { verify } from "jsonwebtoken";
import { TokenException } from "../../exception/TokenException";
import { AbstractTokenAction } from "./abstract/AbstractTokenAction";
import { TokenValidationActionInterface } from "./contract/TokenValidationActionInterface";

/**
 * Class TokenValidationAction
 */
export class TokenValidationAction 
    extends AbstractTokenAction
    implements TokenValidationActionInterface 
{
    /**
     * 
     * @param request
     */
    async process(request: any): Promise<any> {
        const { token } = request ?? {};
        // Check exist token
        if (!token || typeof token !== 'string') {
            throw new TokenException({token}, "Unauthorized", "401", 401);
        }
        // Check token is valid
        try {
            const jwtPayload = verify(token, process.env.TOKEN_SECRET ?? "");
        } catch(e) {
            throw new TokenException({token}, "Unauthorized", "401", 401);
        }
    }
}