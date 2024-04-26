import Redis from 'ioredis';
import { IO_REDIS } from "./Cache";
const redis = new Redis(IO_REDIS);

/**
 * Class IORedis
 */
export class IORedis {
    /**
     * 
     * @param key
     * @param value
     * @param expired_in_seconds
     * @returns
     */
    static async set(key: any, value: any, expired_in_seconds: string|number = '') {
        try {
            if (expired_in_seconds) {
                return await redis.set(key, value, 'EX', expired_in_seconds)
            }
            return await redis.set(key, value)
        } catch (e) {
            console.warn(e);
            await redis.disconnect();
            return null
        }
    }

    /**
     * 
     * @param key
     * @returns
     */
    static async get(key: any) {
        try {
            return await redis.get(key);
        } catch (e) {
            console.warn(e);
            await redis.disconnect();
            return null
        }
    }

    /**
     * 
     * @param key 
     * @returns 
     */
    static async delete(key:any ) {
        try {
            return await redis.del(key);
        } catch (e) {
            console.warn(e);
            await redis.disconnect();
            return null
        }
    }   
}
