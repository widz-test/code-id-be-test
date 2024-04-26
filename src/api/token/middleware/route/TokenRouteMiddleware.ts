import { NextFunction, Request, Response } from 'express';
import { TokenService } from "../../service/TokenService";

/**
 * Class TokenRouteMiddleware
 */
export class TokenRouteMiddleware {
    /**
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    static async handle(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const authHeader = req.headers['authorization'];
            const token = authHeader && authHeader.split(' ')[1];
            await (new TokenService).validate({token});
            next()
        } catch(e) {
            next(e)
        }
    }
}