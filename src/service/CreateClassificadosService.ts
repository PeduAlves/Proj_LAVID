import { getCustomRepository } from "typeorm";
import { ClassificadosRepositories } from "../repositories/ClassificadosRepositories";
import { UsersRepositories } from "../repositories/usersrepositories";


// Criando a tabela de classificados, que sao os usuarios que tem dependencia a drogas
// ou alcool, ou que tem mais de 60 anos, sendo assim idosos
class CreateClassificadosService{
    async execute(id:string){
        const userRepository = getCustomRepository(UsersRepositories)
        if(!id){
            throw new Error("Nome não reconhecido")
        }
        const userExisting = await userRepository.findOne({where:{id:id}})
        if(!userExisting){
            throw new Error("Nome não existente")
        }
        
        var idoso=false, drogas=false;

        const classificadosRepository = getCustomRepository(ClassificadosRepositories)
        if(userExisting.idade>=60){
            idoso = true
        }
        if(userExisting.dependente != "none"){
            drogas = true
        }
        if(idoso == false && drogas == false){
            const classificado = {message :" Usuario não classificado (idoso ou dependente de drogas)"}
            return classificado
        }

        
        const classificado = classificadosRepository.create({
            fknome:id,
            idoso:idoso,
            drogas:drogas
        })
        await classificadosRepository.save(classificado)

        return classificado
        


    }
    
}
export {CreateClassificadosService}