import express from "express";
import { authorize } from "../conection/authorize.js";
import userService from "./service.js";
const router = express.Router();

router.get("/", authorize("Admin"), getAll);
router.get("/:id", authorize(), getById);

function getAll(req, res, next) {
  userService
    .getAll()
    .then((users) =>
      res.status(201).json({ message: "get all sacsses", users })
    )
    .catch((err) => next(err));
}

function getById(req, res, next) {
  const currentUser = req.auth;
  const id = req.params.id;
  if (id !== currentUser.id && currentUser.role !== "Admin") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  userService
    .getById(id)
    .then((user) =>
      user
        ? res.status(201).json({ message: "sacsses get user", user })
        : res.sendStatus(404).json({ massage: "User Not Found" })
    )
    .catch((error) => next(error));
}
export default router;
