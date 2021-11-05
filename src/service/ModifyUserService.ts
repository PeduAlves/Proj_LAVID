import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/usersrepositories";




// Definindo os tipos de cada variavel que vai ser recebida
interface IUser{
    id:string,
    nome:string, 
    sexo:string,
    idade:number,
    dependente:string,
    estado:string,
}

// Criando a função de modificar o usuario que vai receber as informações
// a serem alteradas, e as que não forem recebidas permanecem iguais
class ModifyUserService{
    async execute({
        id, nome= "none", sexo= "none",idade= null, dependente= "none", estado= "none"
    }:IUser){

        const userRepository = getCustomRepository(UsersRepositories)
        const userForModify = await userRepository.findOne({where:{id:id}})
        if(!userForModify){
            throw new Error("Usuário Não Existente")
        }
        if(nome != "none"){
            userForModify.nome = nome
            console.log("Nome alterado com  sucesso")
        }
        
        if(sexo != "none"){
            userForModify.sexo = sexo
            console.log("Sexo alterado com  sucesso")
        }
        
        if(idade != null){
            userForModify.idade = idade
            console.log("Idade alterada com  sucesso")
        }
        
        if(dependente != "none"){
            userForModify.dependente = dependente
            console.log("Dependencia alterada com  sucesso")
        }

        if(estado != "none"){
            userForModify.estado = estado
            console.log("Estado alterado com  sucesso")
        }
        const userModified = userRepository.save(userForModify)

        return userModified
        
    }
}
export {ModifyUserService}