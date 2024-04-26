import * as express from 'express';
import user from "./user";
import token from "./token";

const router = express.Router();

router.use('/user', user);
router.use('/token', token);

export default router;