'use strict';

import { REDIS } from "./Cache";

const redis = require('redis');
const { promisify } = require('util');

/**
 * Class Redis
 */
export class Redis {

	/**
	 *
	 * @returns {RedisClient}
	 */
	static connection() {
		try {
			let client = redis.createClient(REDIS);
			client.on('error', function (err: any) {
				if (err && err.code === 'NR_CLOSED') {
					throw new Error('connection failed')
				}
				console.log('check connection', err);
				if (err) throw new Error(err);
				console.warn(err);
				console.info('error',err instanceof Error);
				console.info('abort',err instanceof redis.AbortError);
				console.info('aggregate',err instanceof redis.AggregateError);
			});

			return client;

		} catch (e) {
			return null
		}
	}

	/**
	 *
	 * @param key
	 * @param value
	 * @returns {*}
	 */
	static set(key: any, value: any) {
		try {
			if (this.connection() === null) return null;
			return this.connection().set(key, value)
		} catch (e) {
			return null
		}
	}

	/**
	 *
	 * @param key
	 * @returns {Promise<*>}
	 */
	static async get(key: any) {
		try {
			if (this.connection() === null) return null;
			let client = await this.connection();
			let getAsync = await promisify(client.get).bind(client);
			getAsync(key).catch((err: any) => {
				console.log(err)
			});
			return await getAsync(key)
		} catch (e) {
			return null
		}
	}

}
