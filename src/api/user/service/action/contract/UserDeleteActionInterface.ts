import { UserInterface } from "../../../model/contract/UserInterface";

/**
 * Interface UserDeleteActionInterface
 */
export interface UserDeleteActionInterface {
    /**
     * 
     * @param request
     * @returns
     */
    process(request: any): Promise<UserInterface>;   
}