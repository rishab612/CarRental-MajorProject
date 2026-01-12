import express from "express";
import { verifyLicense } from "../controllers/ocrController.js";
import { protect } from "../middleware/auth.js";
import upload from "../middleware/multer.js";

const router = express.Router();

// Accept licenseFront and licenseBack files and protect route
router.post(
  '/verify-license',
  protect,
  upload.fields([
    { name: 'licenseFront', maxCount: 1 },
    { name: 'licenseBack', maxCount: 1 }
  ]),
  verifyLicense
);

export default router;
