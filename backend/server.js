const express = require("express");
const app = express();
// const db = require('./database/db');
// const passport = require("passport");
// require("./passportConfig")(passport);
const jwt = require("jsonwebtoken")
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require('cors');
const path = require('path');

// const favicon = require("serve-favicon");
 
const userRouter = require("./routes/api/users");

const PORT = process.env.PORT;

// hey self-person, cors() is a function <<<
app.use(cors());  


const DB = mongoose
  .connect(
    process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB CONNECTION SUCCESSFUL!");
  });

  // app.use(morgan("dev"));
  // app.use(express.json({ limit: '50MB' }));
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  
  app.use("/api/users", userRouter);

  app.all("*", (request, response) => {
    response.send("Undefined route");
  });

app.listen(PORT, () => console.log(`server on port ${PORT}`));






