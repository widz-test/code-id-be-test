import { Model } from 'mongoose';

/**
 * Abstract Class AbstractMongooseModel
 */
export abstract class AbstractMongooseModel {
    /**
     * Constructor
     */
    constructor() {}

    /**
     * @returns
     */
    abstract name(): string;

    /**
     * @returns
     */
    abstract schema(): any;

    /**
     * @returns
     */
    abstract model(): Model<any>;
}