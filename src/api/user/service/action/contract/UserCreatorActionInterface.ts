import { UserInterface } from "../../../model/contract/UserInterface";

/**
 * Interface UserCreatorActionInterface
 */
export interface UserCreatorActionInterface {
    /**
     * 
     * @param request
     * @returns
     */
    process(request: any): Promise<UserInterface>;   
}