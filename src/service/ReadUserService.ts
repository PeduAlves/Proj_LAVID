import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/usersrepositories";


/* função para leitura de usuarios, recebe como parametro o nome do usuario
e retorna todos os usuarios que tiverem o mesmo nome */
class ReadUserService{
    async execute({userNome}){
        const userRepository = getCustomRepository(UsersRepositories)
        const user = await userRepository.find({where:{nome:userNome}})
        if(!user){
            throw new Error("O usuario não existe")
        }
        const ReadUser = user
        
        return ReadUser
    }
}
export {ReadUserService}