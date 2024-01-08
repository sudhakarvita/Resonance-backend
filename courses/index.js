import { Router } from "express";

import{addCoursenames
} from "./controller.js"

const router = new Router();

router.post('/add', addCoursenames)

export default router