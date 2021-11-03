import { Request, Response } from "express";
import { DeleteUserService } from "../service/DeleteUserService";



class DeleteUserController{
    async handle(request:Request, response:Response){
        const {idUser} = request.body
        const deleteUserService = new DeleteUserService();
        const result = await deleteUserService.execute(idUser);
        return response.status(200).json(result);
    }


}
export {DeleteUserController}