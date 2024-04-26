import { UserInterface } from "../../model/contract/UserInterface";
import { AbstractUserCreatorAction } from "./abstract/AbstractUserCreatorAction";
import { UserCreatorActionInterface } from "./contract/UserCreatorActionInterface";

/**
 * Class UserCreatorAction
 */
export class UserCreatorAction 
    extends AbstractUserCreatorAction
    implements UserCreatorActionInterface
{
    /**
     * 
     * @param request
     * @returns
     */
    async handle(request: any): Promise<UserInterface> {
        const { 
            email, 
            username,
            identity_number,
            account_number,
        } = request ?? {};
        return await this.repository.create({
            email: email,
            username: username,
            identity_number: identity_number,
            account_number: account_number,
        })
    }

    /**
     * 
     * @param request
     */
    async validate(request: any): Promise<void> {
        const { 
            email, 
            username,
            identity_number,
            account_number,
        } = request ?? {};
        await Promise.all([
            this.validateIsExistEmail(email),
            this.validateIsExistUsername(username),
            this.validateIsExistIdentityNumber(identity_number),
            this.validateIsExistAccountNumber(account_number)
        ]);
    }
}