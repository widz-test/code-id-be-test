import { UserInterface } from "../../../model/contract/UserInterface";

/**
 * Interface UserUpdaterActionInterface
 */
export interface UserUpdaterActionInterface {
    /**
     * 
     * @param request
     * @returns
     */
    process(request: any): Promise<UserInterface>;   
}