import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../Repositories/UsersRepositories";



class DeleteUserService{
    async execute(idUser:string){
        const userRepository = getCustomRepository(UsersRepositories)
        const userExist = await userRepository.findOne({where:{id:idUser}})
        if(!userExist){
            throw new Error("O usuario não existe")
        }
        await userRepository.delete(userExist.id)
    
        const userDeleted = {
            message: "Usuario deletado com sucesso"
        }
        return userDeleted

    }

}
export {DeleteUserService}