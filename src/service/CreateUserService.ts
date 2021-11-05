import { getCustomRepository } from "typeorm"
import { UserEspecialRepositories } from "../Repositories/UserEspecialRepositories"
import { UsersRepositories } from "../Repositories/UsersRepositories"

 
interface IUser{
    nome:string, 
    sexo:string,
    idade:number,
    dependente:string,
    estado:string,
}

interface IUserEspecial{
    nome:string, 
    sexo:string,
    idade:number,
    estado:string,
    instituicao:string,
    vendedor:boolean,
    cuidador:boolean,
    voluntario:boolean,
    pesquisador:boolean,
}

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

class CreateUserEspecialService{
    async execute({nome, sexo, idade, estado, instituicao, vendedor = false, cuidador = false, voluntario = false, pesquisador = false }:IUserEspecial){
        const userEspecialRepository = getCustomRepository(UserEspecialRepositories)
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
        if(!instituicao){
            throw new Error("Campo instituicao não preenchido")
        }
        if(vendedor == false && cuidador == false && voluntario == false && pesquisador == false){
            throw new Error("Campos não preenchidos, preencha ao menos um: vendedor, cuidador, voluntario, pesquisador")
        }
        
        const userEspecial = userEspecialRepository.create({nome, sexo, idade, estado, instituicao, vendedor, cuidador, voluntario, pesquisador})
        await userEspecialRepository.save(userEspecial)

        return userEspecial
    
    }
}
export{CreateUserService, CreateUserEspecialService}