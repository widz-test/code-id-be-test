import { UserException } from "../../exception/UserException";
import { UserInterface } from "../../model/contract/UserInterface";
import { AbstractUserAction } from "./abstract/AbstractUserAction";
import { UserDetailActionInterface } from "./contract/UserDetailActionInterface";

/**
 * Class UserDetailAction
 */
export class UserDetailAction 
    extends AbstractUserAction
    implements UserDetailActionInterface
{
    /**
     * 
     * @param request
     * @returns
     */
    async process(request: any): Promise<UserInterface> {
        let { id } = request ?? {};
        let user = null;
        id = typeof id === 'string' ? id.toLowerCase() : id;
        try {
            user = await this.repository.findOne({
                $or: [
                    {'id': {'$regex': `^${id}$`, $options:'i'}},
                    {'identity_number': {'$regex': `^${id}$`, $options:'i'}},
                    {'account_number': {'$regex': `^${id}$`, $options:'i'}}
                ]
            });
        } catch(e) {
            throw new UserException({}, "User not found");
        }
        if (!user) {
            throw new UserException({}, "User not found");
        }
        return user;
    }
}