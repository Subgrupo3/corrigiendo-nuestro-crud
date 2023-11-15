/*
En este archivo se trabaja la lógica para responder las peticiones al servidor
*/
const express = require("express");
const userRouter = express.Router();

const userController = require("../controllers/userController");

userRouter.get("/", userController.getUsers);

userRouter.get("/:id", userController.getUserById);

userRouter.post("/", userController.createUser);

userRouter.post("/:id", userController.updateUser);

//userRouter.delete("/:id", userController.getUserById);
userRouter.delete("/:id", userController.deleteUser);  //Para vincular la ruta de eliminación al controlador correcto.

module.exports = userRouter;
