//? We handle Routes and respective verbs in this file

const router = require("express").Router();

//! const express = require('express');
//! const router = express.Router();

const userServices = require("./users.services");

router.get("/users", userServices.getAllUsers);

router.post("/users", userServices.postUser);

router.get("/users/:id", userServices.getUserById);

router.put("/users/:id", userServices.putUser);

router.delete("/users/:id", userServices.deleteUser);

module.exports = router;
