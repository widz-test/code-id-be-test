import { UserRepository } from "../../../repository/UserRepository";

/**
 * Abstract Class AbstractUserAction
 */
export abstract class AbstractUserAction {
    /**
     * @protected
     */
    protected repository: UserRepository;

    /**
     * Constructor
     */
    constructor() {
        this.repository = new UserRepository();
    }
}