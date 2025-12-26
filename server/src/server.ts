import express from "express";
import "dotenv/config";
import database from "./infrastructure/database/mongoose/config";

const app = express();

const startServer = async () => {
  try {
    const PORT = process.env.PORT;
    await database();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT} ✅`);
    });
  } catch (error: any) {
    console.error("Server failed to connect! ❌", error.message);
  }
};

startServer();
