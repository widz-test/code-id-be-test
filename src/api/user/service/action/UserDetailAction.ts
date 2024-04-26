import { USER_CACHE, USER_CACHE_TIME } from "../../../../lib/cache/redis/Cache";
import { IORedis } from "../../../../lib/cache/redis/IORedis";
import { UserException } from "../../exception/UserException";
import { UserInterface } from "../../model/contract/UserInterface";
import { AbstractUserAction } from "./abstract/AbstractUserAction";
import { UserDetailActionInterface } from "./contract/UserDetailActionInterface";

/**
 * Class UserDetailAction
 */
export class UserDetailAction 
    extends AbstractUserAction
    implements UserDetailActionInterface
{
    protected cacheUser: string = USER_CACHE;
    protected cacheTime: number = USER_CACHE_TIME;

    /**
     * 
     * @param request
     * @returns
     */
    async process(request: any): Promise<UserInterface> {
        let { id } = request ?? {};
        id = typeof id === 'string' ? id.toLowerCase() : id;
        let user = null;
        const cacheName = this.cacheUser + `_${id}`;
        // Check user exist in cache
        user = await this.getUserFromCache(cacheName);
        if (user) {
            console.log('Get user from cache');
            return user;
        };
        // Get from database
        try {
            user = await this.repository.findOne({
                $or: [
                    {'id': {'$regex': `^${id}$`, $options:'i'}},
                    {'identity_number': {'$regex': `^${id}$`, $options:'i'}},
                    {'account_number': {'$regex': `^${id}$`, $options:'i'}}
                ]
            });
        } catch(e) {
            throw new UserException({}, "User not found");
        }
        if (!user) {
            throw new UserException({}, "User not found");
        }
        // Set user into cache
        this.setUserToCache(cacheName, user);
        return user;
    }

    /**
     * 
     * @param cacheName
     * @returns
     */
    protected async getUserFromCache(cacheName: string): Promise<UserInterface|null> {
        let user = null;
        try {
            const userCache = await IORedis.get(cacheName);
            if (userCache) {
                user = JSON.parse(userCache);
            }
        } catch(e) {}
        return user;
    }

    /**
     * 
     * @param cacheName
     * @param user
     */
    protected async setUserToCache(cacheName: string, user: UserInterface): Promise<void> {
        try {
            IORedis.set(cacheName, JSON.stringify(user), this.cacheTime);
        } catch (e) {}
    }
}