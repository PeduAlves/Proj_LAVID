import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/usersrepositories";



class ReadUserService{
    async execute({UserNome}){
        const userRepository = getCustomRepository(UsersRepositories)
        const user = await userRepository.findOne({where:{nome:UserNome}})
        if(!user){
            throw new Error("O usuario não existe")
        }
        const ReadUser = user
        
        return ReadUser
    }
}
export {ReadUserService}