import express, { Request, Response, NextFunction } from "express";
import fs from "fs";
import multer from "multer";

import { environment } from "../environment";

const folder = environment.upload_folder;

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }
    cb(null, folder);
  },

  filename: function (req: any, file: any, cb: any) {
    cb(null, file.originalname);
  },
});
const fileFilter = (req: any, file: any, cb: any) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });
router.post(
  "/",

  upload.array("images", 5),
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(req.files);
  }
);
export { router as ProductRoutes };
