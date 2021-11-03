import { Request, Response } from "express";
import { ReadUserService } from "../service/ReadUserService";




class ReadUserController{
    async handle(request:Request, response:Response){
        const UserNome = request.body
        const readUserService = new ReadUserService()
        const ReadUser = await readUserService.execute(UserNome)
        return response.status(200).json(ReadUser)

    }
}
export{ReadUserController}