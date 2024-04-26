import { UserInterface } from "../../model/contract/UserInterface";

/**
 * Interface UserServiceInterface
 */
export interface UserServiceInterface {
    /**
     * 
     * @param request
     * @returns
     */
    getUsers(request: any): Promise<UserInterface[]>;

    /**
     * 
     * @param request
     * @returns
     */
    create(request: any): Promise<UserInterface>;

    /**
     * 
     * @param request
     * @returns
     */
    update(request: any): Promise<UserInterface>;

    /**
     * 
     * @param request
     * @returns
     */
    delete(request: any): Promise<UserInterface>;

    /**
     * 
     * @param request
     * @returns
     */
    detail(request: any): Promise<UserInterface>;
}