import { sign } from "jsonwebtoken";
import { AbstractTokenAction } from "./abstract/AbstractTokenAction";
import { TokenGeneratorActionInterface } from "./contract/TokenGeneratorActionInterface";
import { TokenException } from "../../exception/TokenException";

/**
 * Class TokenGeneratorAction
 */
export class TokenGeneratorAction 
    extends AbstractTokenAction
    implements TokenGeneratorActionInterface
{
    /**
     * 
     * @param request
     */
    async process(request: any): Promise<{ token: string|null; }> {
        let token = null;
        // Find user
        const user = await this.userService.detail(request);
        // Generate token for user
        try {
            token = sign({id: user.id}, process.env.TOKEN_SECRET ?? "", { expiresIn: "60s" });
        } catch(e) {
            throw new TokenException("Failed generate token");
        }
        return {
            token: token
        }
    }
}