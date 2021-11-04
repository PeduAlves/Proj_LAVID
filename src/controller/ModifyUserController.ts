import { Request, Response } from "express";
import { ModifyUserService } from "../service/ModifyUserService";





class ModifyUserController{
    async handle(request:Request, response:Response){
        const {id, nome, sexo, idade, dependente, estado} = request.body
        const modifyUserService = new ModifyUserService()
        const userMod = await modifyUserService.execute({id, nome, sexo, idade, dependente, estado})
                
        return response.status(200).json(userMod)          
    }
}
export {ModifyUserController}