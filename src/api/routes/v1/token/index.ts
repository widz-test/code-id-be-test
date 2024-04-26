import { NextFunction, Request, Response } from "express";
import * as express from "express";
import { TokenController } from "../../../token/controller/TokenController";
const router = express.Router();

router.post(
	"/",
	async function (req: Request, res: Response, next: NextFunction) {
		try {
			let payload = req.body;
            payload = req.query ? Object.assign(payload, req.query) : payload;
            payload = req.params ? Object.assign(payload, req.params) : payload;
			res.json(await new TokenController().generate(payload)).status(200);
		} catch (e) {
			next(e);
		}
	}
);

export default router;