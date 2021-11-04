import { Request, Response } from "express";
import { ReadUserService } from "../service/ReadUserService";




class ReadUserController{
    async handle(request:Request, response:Response){
        const userNome = request.body
        const readUserService = new ReadUserService()
        const ReadUser = await readUserService.execute(userNome)
        return response.status(200).json(ReadUser)

    }
}
export{ReadUserController}