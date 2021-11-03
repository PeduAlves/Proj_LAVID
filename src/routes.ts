import { application, Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { DeleteUserController } from "./controller/DeleteUserController";
import { ReadUserController } from "./controller/ReadUserController";

const router = Router();


const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()
const readUserController = new ReadUserController()

router.post("/CreateUser",createUserController.handle)
router.delete("/DeleteUser",deleteUserController.handle)
router.get("/ReadUser", readUserController.handle)

export{router};