import express from "express";
import "dotenv/config";

const app = express();

const startServer = async () => {
  try {
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
