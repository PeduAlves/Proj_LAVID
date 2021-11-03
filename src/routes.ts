import { application, Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { DeleteUserController } from "./controller/DeleteUserController";

const router = Router();


const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()

router.post("/CreateUser",createUserController.handle)
router.delete("/DeleteUser",deleteUserController.handle)

export{router};