<<<<<<< HEAD
import CMomgoDB from "./server/CQ-API/mongo.js";
import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRrouter from "./server/users/controllers.js";
import conectionRouter from "./server/conection/controllers.js";
import errHendler from "./server/conection/error-handler.js";
=======
import appAPI from "./app/API/appAPI.js"
import mongoDBConnection from './app/API/create-quick/mongo.js'
>>>>>>> origin/master

appAPI()
mongoDBConnection()