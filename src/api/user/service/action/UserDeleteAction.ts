import { UserInterface } from "../../model/contract/UserInterface";
import { AbstractUserCreatorAction } from "./abstract/AbstractUserCreatorAction";
import { UserDeleteActionInterface } from "./contract/UserDeleteActionInterface";

/**
 * Class UserDeleteAction
 */
export class UserDeleteAction 
    extends AbstractUserCreatorAction
    implements UserDeleteActionInterface
{
    /**
     * 
     * @param request
     * @returns
     */
    async handle(request: any): Promise<UserInterface> {
        const { id } = request ?? {};
        const user = await this.validateIsExistByID(id);
        await this.repository.deleteById(user.id);
        return user;
    }

    /**
     * 
     * @param request
     */
    async validate(request: any): Promise<void> {}
}