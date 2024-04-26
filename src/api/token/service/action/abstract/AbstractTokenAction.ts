import { UserServiceInterface } from "../../../../user/service/contract/UserServiceInterface";
import { UserService } from "../../../../user/service/UserService";

/**
 * Abstract class AbstractTokenAction
 */
export abstract class AbstractTokenAction {
    protected userService: UserServiceInterface;
    
    /**
     * Constructor
     */
    constructor() {
        this.userService = new UserService();
    }
}