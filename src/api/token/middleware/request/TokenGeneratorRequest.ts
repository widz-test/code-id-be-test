import { RequestValidation } from "../../../../lib/validation/request/RequestValidation";

/**
 * Class TokenGeneratorRequest
 */
export class TokenGeneratorRequest extends RequestValidation {
    /**
     *
     * @param data
     */
    static async check(data: any): Promise<any> {
        return await TokenGeneratorRequest.validator(TokenGeneratorRequest.schema(), data)
    }

    /**
     * 
     * @returns
     */
    static schema(): object {
        return {
            id: [
                TokenGeneratorRequest.required,
                TokenGeneratorRequest.string
            ]
        };
    }
}
