import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../Repositories/UsersRepositories";



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