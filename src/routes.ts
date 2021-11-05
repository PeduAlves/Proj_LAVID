import { application, Router } from "express";
import { CreateUserController, CreateUserEspecialController } from "./Controller/CreateUserController";
import { DeleteUserController } from "./Controller/DeleteUserController";
import { ModifyUserController } from "./Controller/ModifyUserController";
import { ReadUserController } from "./Controller/ReadUserController";

const router = Router();

//Definindo as funções nesse arquivo
const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()
const readUserController = new ReadUserController()
const modifyUserController = new ModifyUserController()
const createUserEspecialController = new CreateUserEspecialController()

//Post
router.post("/CreateUser",createUserController.handle)
router.post("/CreateUserEspecial", createUserEspecialController.handle)

//Delete
router.delete("/DeleteUser",deleteUserController.handle)

//Get
router.get("/ReadUser", readUserController.handle)

//Put
router.put("/ModifyUser", modifyUserController.handle)

export{router};