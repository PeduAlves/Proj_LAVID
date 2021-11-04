import { application, Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { DeleteUserController } from "./controller/DeleteUserController";
import { ModifyUserController } from "./controller/ModifyUserController";
import { ReadUserController } from "./controller/ReadUserController";

const router = Router();


const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()
const readUserController = new ReadUserController()
const modifyUserController = new ModifyUserController()

router.post("/CreateUser",createUserController.handle)
router.delete("/DeleteUser",deleteUserController.handle)
router.get("/ReadUser", readUserController.handle)
router.put("/ModifyUser", modifyUserController.handle)

export{router};