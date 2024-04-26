import { Dateparser } from "../../../date/Dateparser";
import { AbstractMongooseBaseRepository } from './abstract/AbstractMongooseBaseRepository';
import { Model } from "mongoose";

/**
 * Class MongooseBaseRepository
 */
export class MongooseBaseRepository extends AbstractMongooseBaseRepository {
    /**
     * @returns 
     */
    model(): Model<any> {
        return this.driver.model('');
    }

    /**
     * Find all
     * 
     * @param condition 
     * @returns 
     */
    async all(condition: any = {}) {
        return await this.model().find(condition);
    }    

    /**
     * Find one
     * 
     * @param condition 
     * @param attribute 
     * @returns 
     */
    async findOne(condition: any = {}, attribute: any = {}) {
        return await this.model().findOne(condition, attribute);
    }

    /**
     * Find by id
     * 
     * @param id 
     * @returns 
     */
    async findById(id: any) {
        return await this.model().findById(id);
    }

    /**
     * Create
     * 
     * @param input 
     * @returns 
     */
    async create(input: any = {}) {
        input.created_at = Dateparser.databaseFormat();
		input.updated_at = Dateparser.databaseFormat();
        return await this.model().create(input);
    }

    /**
     * Update
     * 
     * @param condition 
     * @param input 
     * @returns 
     */
    async update(condition: any = {}, input: any = {}) {
        input.updated_at = Dateparser.databaseFormat();
        return await this.model().findOneAndUpdate(condition, input, { 
            new:true 
        });
    }

    /**
     * Delete
     * 
     * @param condition 
     * @returns 
     */
    async delete(condition: any = {}) {
        return await this.model().findOneAndDelete(condition);
    }

    /**
     * Update by id
     * 
     * @param id 
     * @param input 
     * @returns 
     */
    async updateById(id: any, input: any = {}) {
        input.updated_at = Dateparser.databaseFormat();
        return await this.model().findByIdAndUpdate(id, input, { 
            new:true 
        });
    }

    /**
     * Delete by id
     * 
     * @param id
     * @returns 
     */
    async deleteById(id: string) {
        return await this.model().findByIdAndDelete(id);
    }
}