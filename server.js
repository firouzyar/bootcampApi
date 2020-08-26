const express = require("express");
const dotenv = require("dotenv");

//Load env var
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;
const app = express();

app.listen(
  PORT,
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
);
