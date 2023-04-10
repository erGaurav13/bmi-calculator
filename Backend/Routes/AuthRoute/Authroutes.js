const express = require("express");
const {
  createUser,
  login,
  getUserByID,
  getAllUsers,
} = require("../../Controller/Auth.Controller.js/auth.controller");
const authRoute = express.Router();

// for admin to get all user 
authRoute.get("/getAllusers", async (req, res) => {
  try {
    const allUser = await getAllUsers();
    res.status(200).send(allUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

// to get user by id
authRoute.post("/getusers/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).send("Require [id] to search ");
  }

  try {
    const user = await getUserByID(id);
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

// login api
authRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("MISSING EMAIL&PASSWORD");
  }
  try {
    const token = await login(email, password);
    if (token) {
      res.set("Authorization", `Bearer ${token}`);
      res.status(200).send({ token: token, status: "ok" });
    } else {
      res.status(400).send("check email & password");
    }
  } catch (e) {
    res.send(e);
  }
});

// create new-user api
authRoute.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).send("missing-name, email, password");
  }
  try {
    const newUser = await createUser(name, email, password);
   return  res.send(newUser);
  } catch (e) {
    res.send(e);
  }
});

module.exports = authRoute;
