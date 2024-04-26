import { TokenGeneratorActionInterface } from "./action/contract/TokenGeneratorActionInterface";
import { TokenValidationActionInterface } from "./action/contract/TokenValidationActionInterface";
import { TokenGeneratorAction } from "./action/TokenGeneratorAction";
import { TokenValidationAction } from "./action/TokenValidationAction";
import { TokenServiceInterface } from "./contract/TokenServiceInterface";

/**
 * Class TokenService
 */
export class TokenService implements TokenServiceInterface {
    protected generatorAction: TokenGeneratorActionInterface;
    protected validatorAction: TokenValidationActionInterface;
    
    /**
     * Constructor
     */
    constructor() {
        this.generatorAction = new TokenGeneratorAction();
        this.validatorAction = new TokenValidationAction();
    }

    /**
     * 
     * @param request
     * @returns
     */
    async generate(request: any): Promise<any> {
        return await this.generatorAction.process(request);
    }

    /**
     * 
     * @param request
     * @returns
     */
    async validate(request: any): Promise<any> {
        return await this.validatorAction.process(request);
    }
}