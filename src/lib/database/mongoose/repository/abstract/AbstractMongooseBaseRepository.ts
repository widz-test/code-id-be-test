import mongoose, { Model } from "mongoose";

/**
 * Class AbstractMongooseBaseRepository
 */
export abstract class AbstractMongooseBaseRepository {
    protected driver: typeof mongoose;

    /**
     * Constructor
     */
    constructor() {
        this.driver = mongoose;
    }

    /**
     * @returns 
     */
    abstract model(): Model<any>;
}