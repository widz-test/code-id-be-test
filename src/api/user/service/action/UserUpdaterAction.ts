import { UserInterface } from "../../model/contract/UserInterface";
import { AbstractUserCreatorAction } from "./abstract/AbstractUserCreatorAction";
import { UserUpdaterActionInterface } from "./contract/UserUpdaterActionInterface";

/**
 * Class UserUpdaterAction
 */
export class UserUpdaterAction 
    extends AbstractUserCreatorAction
    implements UserUpdaterActionInterface
{
    /**
     * 
     * @param request
     * @returns
     */
    async handle(request: any): Promise<UserInterface> {
        const { 
            id,
            email, 
            username,
            identity_number,
            account_number,
        } = request ?? {};
        const user = await this.validateIsExistByID(id);
        return await this.repository.updateById(user.id, {
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
            id,
            email, 
            username,
            identity_number,
            account_number,
        } = request ?? {};
        const user = await this.validateIsExistByID(id);
        await Promise.all([
            this.validateIsExistEmail(email, user.id),
            this.validateIsExistUsername(username, user.id),
            this.validateIsExistIdentityNumber(identity_number, user.id),
            this.validateIsExistAccountNumber(account_number, user.id),

        ]);
    }
}