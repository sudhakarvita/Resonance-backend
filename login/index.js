import { Router } from "express";

import verifyToken from "../jwt/verifytoken.js";

import{ createNewadmin,
        adminLogin
} from "./controller.js"

const router = new Router();

router.post('/', createNewadmin)

router.post('/login', adminLogin)

export default router