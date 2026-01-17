import './di/container';
import express from "express";
import "dotenv/config";
import database from "./infrastructure/database/mongoose/config";
import {config} from './infrastructure/config/app.config';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { registerRoutes } from "./presentation/routes";



const app = express();

app.use(cors({origin: config.CLIENT_URL,credentials:true}));
app.use(express.json());
app.use(cookieParser());
registerRoutes(app);

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
