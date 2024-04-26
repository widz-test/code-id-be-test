import mongoose from "mongoose";
require('dotenv').config();

const {
    DB_MONGO_HOST,
    DB_MONGO_PORT,
    DB_MONGO_USERNAME,
    DB_MONGO_PASSWORD,
    DB_MONGO_DATABASE,
    DB_MONGO_AUTH_SOURCE,
} = process.env;

/**
 * Class MongooseConfig
 */
export class MongooseConfig {
    /**
     * 
     * @returns 
     */
    async handle() {
        try {
            await mongoose.connect(this.config(), {}).then(() => {
                console.log('Connected to mongo database')
            })
        } catch(e) {
            console.log('Failed connected to mongo database')
            console.log(e)
        }
    }
    
    /**
     * 
     * @returns 
     */
    config() {
        return `mongodb://${DB_MONGO_USERNAME}:${DB_MONGO_PASSWORD}@${DB_MONGO_HOST}:${DB_MONGO_PORT}/${DB_MONGO_DATABASE}?authSource=${DB_MONGO_AUTH_SOURCE}`
    }
    
    async disconnect() {
        await mongoose.disconnect()
    }
}