import { RequestValidation } from "../../../../lib/validation/request/RequestValidation";

/**
 * Class UserCreatorRequest
 */
export class UserCreatorRequest extends RequestValidation {
    /**
     *
     * @param data
     */
    static async check(data: any): Promise<any> {
        return await UserCreatorRequest.validator(UserCreatorRequest.schema(), data);
    }

    /**
     * 
     * @returns
     */
    static schema(): object {
        return {
            email: [
                UserCreatorRequest.required,
                UserCreatorRequest.string,
                UserCreatorRequest.email,
            ],
            username: [
                UserCreatorRequest.required,
                UserCreatorRequest.string,
            ],
            identity_number: [
                UserCreatorRequest.required,
                UserCreatorRequest.string,
            ],
            account_number: [
                UserCreatorRequest.required,
                UserCreatorRequest.string
            ]
        };
    }
}
