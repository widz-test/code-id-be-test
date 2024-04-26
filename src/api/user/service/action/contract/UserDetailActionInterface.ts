import { UserInterface } from "../../../model/contract/UserInterface";

/**
 * Interface UserDetailActionInterface
 */
export interface UserDetailActionInterface {
    /**
     * 
     * @param request
     * @returns
     */
    process(request: any): Promise<UserInterface>;   
}