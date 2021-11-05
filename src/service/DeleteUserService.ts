import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/usersrepositories";


// Criando a função de deletar o usuario, que recebe o ID do usuario
// que é unico para cada usuario, sendo assim sem chance de errar o usuario a ser deletado
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