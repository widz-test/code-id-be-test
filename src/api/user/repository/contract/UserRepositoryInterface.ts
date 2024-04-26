import { UserInterface } from "../../model/contract/UserInterface";

/**
 * Interface UserRepositoryInterface
 */
export interface UserRepositoryInterface {
    /**
     * Find by id
     * 
     * @param id 
     * @returns 
     */
    findByID(id: string): Promise<UserInterface>;

    /**
     * Find by email
     * 
     * @param email 
     * @returns 
     */
    findByEmail(email: string): Promise<UserInterface>;

    /**
     * Find by username
     * 
     * @param username 
     * @returns 
     */
    findByUsername(username: string): Promise<UserInterface>;

    /**
     * Find by identity number
     * 
     * @param identityNumber 
     * @returns 
     */
    findByIdentityNumber(identityNumber: string): Promise<UserInterface>;

    /**
     * Find by account number
     * 
     * @param accountNumber 
     * @returns 
     */
    findByAccountNumber(accountNumber: string): Promise<UserInterface>;
}