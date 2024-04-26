import { TokenGeneratorRequest } from "../middleware/request/TokenGeneratorRequest";
import { TokenServiceInterface } from "../service/contract/TokenServiceInterface";
import { TokenService } from "../service/TokenService";
import { TokenTransformer } from "../transformer/TokenTransformer";

export class TokenController {
    protected service: TokenServiceInterface;

    /**
     * Constructor
     */
    constructor() {
        this.service = new TokenService();
    }

    /**
	 *
	 * @param request
     * @returns
	 */
	async generate(
		request: any
	): Promise<any> {
		return await new TokenTransformer(
			await this.service.generate(
				await TokenGeneratorRequest.check(request)
			)
		).json();
	}
}