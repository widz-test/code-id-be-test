import { Model } from "mongoose";
import { User } from "../model/User";
import { MongooseBaseRepository } from "../../../lib/database/mongoose/repository/MongooseBaseRepository";
import { UserInterface } from "../model/contract/UserInterface";
import { UserRepositoryInterface } from "./contract/UserRepositoryInterface";

/**
 * Class UserRepository
 */
export class UserRepository 
    extends MongooseBaseRepository 
    implements UserRepositoryInterface 
{
    /**
     * Model
     * 
     * @returns 
     */
    model(): Model<any> {
        return (new User).model()
    }

    /**
     * Find by id
     * 
     * @param id 
     * @returns 
     */
    async findByID(id: string): Promise<UserInterface> {
        return await this.findOne({
            _id: id
        })
    }

    /**
     * Find by email
     * 
     * @param email 
     * @returns 
     */
    async findByEmail(email: string): Promise<UserInterface> {
        return await this.findOne({
            email: email
        })
    }

    /**
     * Find by username
     * 
     * @param username 
     * @returns 
     */
    async findByUsername(username: string): Promise<UserInterface> {
        return await this.findOne({
            username: username
        })
    }

    /**
     * Find by identity number
     * 
     * @param identityNumber 
     * @returns 
     */
    async findByIdentityNumber(identityNumber: string): Promise<UserInterface> {
        return await this.findOne({
            identity_number: identityNumber
        })
    }

    /**
     * Find by account number
     * 
     * @param accountNumber 
     * @returns 
     */
    async findByAccountNumber(accountNumber: string): Promise<UserInterface> {
        return await this.findOne({
            account_number: accountNumber
        })
    }
}