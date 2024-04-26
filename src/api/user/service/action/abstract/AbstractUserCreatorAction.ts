import { DisplayableException } from "../../../../../lib/exception/DisplayableException";
import { UserException } from "../../../exception/UserException";
import { UserInterface } from "../../../model/contract/UserInterface";
import { AbstractUserAction } from "./AbstractUserAction";

/**
 * Abstract Class AbstractUserCreatorAction
 */
export abstract class AbstractUserCreatorAction extends AbstractUserAction {
    /**
     * @protected
     */
    protected user!: UserInterface;
    
    /**
     * 
     * @param request
     * @returns
     */
    async process(request: any): Promise<UserInterface> {
        await this.validate(request);
        try {
            this.user = await this.handle(request);
        } catch(e) {
            await this.handleError(e);
        }
        return this.user;
    }

    /**
     * 
     * @param request
     * @returns
     */
    abstract validate(request: any): Promise<void>;

    /**
     * 
     * @param request
     * @returns
     */
    abstract handle(request: any): Promise<UserInterface>;

    /**
     * 
     * @param e
     */
    async handleError(e: any): Promise<void> {
        if (e instanceof DisplayableException) {
			throw e;
		}
		throw new UserException({}, "Failed process");
    }

    /**
     * Validate is exist by email
     * 
     * @param email
     * @param exceptID
     */
    async validateIsExistEmail(email: string, exceptID: string|null = null): Promise<void> {
        const user = await this.repository.findByEmail(email);
        if (user) {
            if (user.id != exceptID) {
                throw new UserException({
                    email: email,
                }, "Email already exist");
            }
        }
    }

    /**
     * Validate is exist by username
     * 
     * @param username
     * @param exceptID
     */
    async validateIsExistUsername(username: string, exceptID: string|null = null): Promise<void> {
        const user = await this.repository.findByUsername(username);
        if (user) {
            if (user.id != exceptID) {
                throw new UserException({
                    username: username,
                }, "Username already exist");
            }
        }
    }

    /**
     * Validate is exist by identity number
     * 
     * @param identityNumber
     * @param exceptID
     */
    async validateIsExistIdentityNumber(identityNumber: string, exceptID: string|null = null): Promise<void> {
        const user = await this.repository.findByIdentityNumber(identityNumber);
        if (user) {
            if (user.id != exceptID) {
                throw new UserException({
                    identity_number: identityNumber,
                }, "Identity number already exist");
            }
        }
    }

    /**
     * Validate is exist by account number
     * 
     * @param accountNumber
     * @param exceptID
     */
    async validateIsExistAccountNumber(accountNumber: string, exceptID: string|null = null): Promise<void> {
        const user = await this.repository.findByAccountNumber(accountNumber);
        if (user) {
            if (user.id != exceptID) {
                throw new UserException({
                    accountNumber: accountNumber,
                }, "Account number already exist");
            }
        }
    }

    /**
     * 
     * @param id
     * @returns
     */
    async validateIsExistByID(id: string): Promise<UserInterface> {
        let user = null;
        try {
            user = await this.repository.findByID(id);
        } catch(e) {
            throw new UserException({}, "User not found");
        }
        if (!user) {
            throw new UserException({}, "User not found");
        }
        return user;
    }
}