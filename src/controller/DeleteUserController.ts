import { Request, Response } from "express";
import { DeleteUserService } from "../service/DeleteUserService";


// definindo o controller que vai chamar e executar o service de delete
class DeleteUserController{
    async handle(request:Request, response:Response){
        var {idUser} = request.query
        idUser = idUser.toString()
        const deleteUserService = new DeleteUserService();
        const result = await deleteUserService.execute(idUser);
        return response.status(200).json(result);
    }


}
export {DeleteUserController}