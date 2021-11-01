import { application, Router } from "express";
import { CreateUserControler } from "./controller/CreateUserControler";

const router = Router();


const createUserController = new CreateUserControler()

router.post("/user",createUserController.handle)

export{router};