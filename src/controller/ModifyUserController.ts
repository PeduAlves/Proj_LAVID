import { Request, Response } from "express";
import { ModifyUserService } from "../service/ModifyUserService";




// defindino o controller que vai chamar e executar o service modificar o usuario
class ModifyUserController{
    async handle(request:Request, response:Response){
        const {id, nome, sexo, idade, dependente, estado} = request.body
        const modifyUserService = new ModifyUserService()
        const userMod = await modifyUserService.execute({id, nome, sexo, idade, dependente, estado})
                
        return response.status(200).json(userMod)          
    }
}
export {ModifyUserController}