import express from "express";
import {
  deleteData,
  getAllData,
  getData,
  logIn,
  putData,
  signIn,
} from "../controllers/UseController.js";

export const myRouter = express.Router();

myRouter.get("/", getAllData);
myRouter.get("/:id", getData);
myRouter.delete("/:id", deleteData);
myRouter.put("/:id", putData);
myRouter.post("/signin", signIn);
myRouter.post("/login", logIn);
