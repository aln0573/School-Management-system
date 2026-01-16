import express from "express";
import "dotenv/config";
import database from "./infrastructure/database/mongoose/config";
import userRoutes from "./presentation/routes/user.route";
import {config} from './infrastructure/config/app.config';
import cookieParser from 'cookie-parser';
import authRouter from "./presentation/routes/auth.route";


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use([userRoutes,authRouter]);

const startServer = async () => {
  try {
    const PORT = process.env.PORT || 8000;
    await database();
    app.listen(PORT, () => {
      if (process.env.NODE_ENV === "development") {
        console.log(`Server running on ${config.BASE_URL} ✅`);
      } else {
        console.log(`Server Started ✅`);
      }
    });
  } catch (error: any) {
    console.error("Server failed to connect! ❌", error.message);
  }
};

startServer();
