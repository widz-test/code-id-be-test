import { UserInterface } from "../../model/contract/UserInterface";
import { AbstractUserAction } from "./abstract/AbstractUserAction";
import { UserFetcherActionInterface } from "./contract/UserFetcherActionInterface";

/**
 * Class UserFetcherAction
 */
export class UserFetcherAction 
    extends AbstractUserAction
    implements UserFetcherActionInterface
{
    /**
     * 
     * @param request
     * @returns
     */
    async process(request: any): Promise<UserInterface[]> {
        return await this.repository.all(request);
    }
}