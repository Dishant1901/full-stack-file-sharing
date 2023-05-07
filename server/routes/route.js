import express from "express";
// importing control functions #MVC
import { downloadImage, uploadImage } from "../controllers/image-controllers.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.post('/upload',upload.single('file'),uploadImage);
router.get('/file/:fileId',downloadImage);
export default router;