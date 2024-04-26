import { RequestValidation } from "../../../../lib/validation/request/RequestValidation";

/**
 * Class UserUpdaterRequest
 */
export class UserUpdaterRequest extends RequestValidation {
    /**
     *
     * @param data
     */
    static async check(data: any): Promise<any> {
        return await UserUpdaterRequest.validator(UserUpdaterRequest.schema(), data)
    }

    /**
     * 
     * @returns
     */
    static schema(): object {
        return {
            id: [
                UserUpdaterRequest.required,
                UserUpdaterRequest.string
            ],
            email: [
                UserUpdaterRequest.required,
                UserUpdaterRequest.string,
                UserUpdaterRequest.email,
            ],
            username: [
                UserUpdaterRequest.required,
                UserUpdaterRequest.string,
            ],
            identity_number: [
                UserUpdaterRequest.required,
                UserUpdaterRequest.string,
            ],
            account_number: [
                UserUpdaterRequest.required,
                UserUpdaterRequest.string
            ]
        };
    }
}
