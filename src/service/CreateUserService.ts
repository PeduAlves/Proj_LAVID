import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/usersrepositories"

 // Definindo os tipos dos parametros a serem recebidos
interface IUser{
    nome:string, 
    sexo:string,
    idade:number,
    dependente:string,
    estado:string,
}
// Criando a funcção de criação de novos usuarios, onde apenas o "dependente" não é
// obrigatorio, considerando que o usuario nao é dependente, caso o campo esteja vazio
class CreateUserService{
    async execute({nome, sexo, idade,dependente = "none",estado}:IUser){
        const userRepository = getCustomRepository(UsersRepositories)
        if(!nome){
            throw new Error("Campo nome não preenchido")
        }
        if(!sexo){
            throw new Error("Campo sexo não preenchido")
        }
        if(!idade){
            throw new Error("Campo idade não preenchido")
        }
        if(!estado){
            throw new Error("Campo estado não preenchido")
        }
        const user = userRepository.create({nome, sexo, idade, dependente, estado})
        await userRepository.save(user)

        return user
    
    }
}
export{CreateUserService}