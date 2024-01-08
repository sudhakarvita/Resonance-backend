import { Router } from "express";
import{ imgUpload,
        fileNum
    
} from "./controller.js";


const router = new Router();

router.post('/upload', fileNum, imgUpload)

export default router