import { UserInterface } from "../../../model/contract/UserInterface";

/**
 * Interface UserFetcherActionInterface
 */
export interface UserFetcherActionInterface {
    /**
     * 
     * @param request
     * @returns
     */
    process(request: any): Promise<UserInterface[]>;
}