export const USER_CACHE = process.env.NODE_ENV + '/user';
export const USER_CACHE_TIME = 10; // 10 seconds
export const REDIS = {
	host: process.env.REDIS_HOST,
	port: process.env.REDIS_PORT,
	auth_pass: process.env.REDIS_PASSWORD,
	no_ready_check: true,
	tls: {
		checkServerIdentity: () => undefined
	}
};
let port: number = Number(process.env.REDIS_PORT) ? Number(process.env.REDIS_PORT) : 6379;
export const IO_REDIS = process.env.REDIS_SCHEME === 'ssl' ?  {
	port						: port,
	host						: process.env.REDIS_HOST,
	family						: 4,
	password					: process.env.REDIS_PASSWORD,
	db:							 0,
	no_ready_check				: true,
	tls							: {
									checkServerIdentity: () => undefined
								  },
	showFriendlyErrorStack		: true,
	connectTimeout				: 1000,
	maxRetriesPerRequest		: 1
} : {
	port						: port,
	host						: process.env.REDIS_HOST,
	password					: process.env.REDIS_PASSWORD,
	family						: 4,
	db							: 0,
	showFriendlyErrorStack		: true,
	connectTimeout				: 1000,
	maxRetriesPerRequest		: 1
};