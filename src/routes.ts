import { application, Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { DeleteUserController } from "./controller/DeleteUserController";
import { ModifyUserController } from "./controller/ModifyUserController";
import { ReadUserController } from "./controller/ReadUserController";

const router = Router();

//Definindo as funções dentro desse arquivo
const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()
const readUserController = new ReadUserController()
const modifyUserController = new ModifyUserController()

//post - adicionar
router.post("/CreateUser",createUserController.handle)

//delete - deletar
router.delete("/DeleteUser",deleteUserController.handle)

//get - ler
router.get("/ReadUser", readUserController.handle)

//put - modificar
router.put("/ModifyUser", modifyUserController.handle)

export{router};