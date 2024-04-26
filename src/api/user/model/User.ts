import mongoose, { Model } from "mongoose";
import { AbstractMongooseModel } from "../../../lib/database/mongoose/model/abstract/AbstractMongooseModel";

/**
 * Class User
 */
export class User extends AbstractMongooseModel {
    /**
     * 
     * @returns 
     */
    name(): string {
        return 'user'   
    }
    
    /**
     * @returns
     */
    schema(): any {
        return new mongoose.Schema({
            username: {
                type: 'string',
                required: true
            },
            email: {
                type: 'string',
                required: true
            },
            identity_number: {
                type: 'string',
                required: true,
                index: true
            },
            account_number: {
                type: 'string',
                required: true,
                index: true
            },
            created_at: {
                type: 'string',
                required: false
            }, 
            updated_at: {
                type: 'string',
                required: false
            }
        })   
    }

    /**
     * 
     * @returns 
     */
    model(): Model<any> {
        return !mongoose.models[this.name()] ? 
            mongoose.model(this.name(), this.schema(), this.name()) :
            mongoose.models[this.name()]
    }
}