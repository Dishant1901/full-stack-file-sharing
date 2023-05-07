import express from "express";
import router from "./routes/route.js";
import cors from "cors";
import DBconnection from "./database/db.js";

const app =express();

const PORT=5000;

app.use(cors());
app.use('/',router);

DBconnection();

app.listen(PORT,()=>{console.log(`server is up and running on port: ${PORT}!`)});