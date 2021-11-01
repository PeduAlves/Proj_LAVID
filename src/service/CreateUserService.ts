import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/usersrepositories"

 
interface IUser{
    nome:string, 
    sexo:string,
    idade:number,
    dependente:string,
    estado:string,
}
class CreateUserService{
    async execute({nome, sexo, idade,dependente = "none",estado}:IUser){
        const userRepository = getCustomRepository(UsersRepositories)
        if(!nome || !sexo || !idade || !dependente || !estado){
            throw new Error("Campo não preenchido")
        }
    
        const user = userRepository.create({nome, sexo, idade, dependente, estado})
        await userRepository.save(user)


        return user
    
    }
}
export{CreateUserService}