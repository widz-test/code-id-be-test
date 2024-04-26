import * as httpCode from "./HttpCode";

/**
 * GENERAL
 */
export const SERVICE_UNAVAILABLE = {
	code: httpCode.UNPROCESSABLE_ENTITY,
	message: "Service Unvailable",
};

export const REQUEST_VALIDATION_NOT_NULL = {
    code: httpCode.UNPROCESSABLE_ENTITY,
    message: "Must be filled in, not allowed (empty, null, undefined or nan)"
};