import dotenv from "dotenv";

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

interface Environment {
  upload_folder: string;
}

export const environment: Environment = {
  upload_folder: process.env.UPLOAD_FOLDER as string,
};
