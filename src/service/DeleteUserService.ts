import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/usersrepositories";



class DeleteUserService{
    async execute({idUser}){
        const userRepository = getCustomRepository(UsersRepositories)
        const userExist = await userRepository.findOne({where:{id:idUser}})
        if(!userExist){
            throw new Error("O usuario não existe")
        }
        await userRepository.delete(userExist)
    
        const userDeleted = {
            message: "Usuario deletado com sucesso"
        }
        return userDeleted

    }

}
export {DeleteUserService}