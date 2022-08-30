import "dotenv/config";
import { createOneUser, createUserToken } from "../users/service.js";
import User from "../users/model.js";
import bcrypt from "bcrypt";

function register(req, res) {
  createOneUser(req.body)
    .then((resulte) => {
      const user = createUserToken(resulte._doc);
      res.status(201).json({ message: "User Created Successfully", user });
    })
    .catch((error) => {
      res.status(500).json({ massage: "Error creating user", error });
    });
}

function login(req, res) {
  User.findOne({ email: req.body.email })
    .then((resulte) => {
      bcrypt
        .compare(req.body.password, resulte.password)
        .then((correctPassword) => {
          if (!correctPassword)
            res
              .status(400)
              .json({ massage: "Passwords does not match", error });
          const user = createUserToken(resulte._doc);
          res.status(200).json({ message: "Login Successful", user });
        })
        .catch((error) => {
          res.status(400).json({ massage: "Passwords does not match", error });
        });
    })
    .catch((error) => {
      res.status(404).json({ massage: "Email not found", error });
    });
}

export { register, login };
