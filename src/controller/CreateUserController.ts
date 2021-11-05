import { Request, Response } from "express";
import { CreateClassificadosService } from "../service/CreateClassificadosService";
import { CreateUserEspecialService, CreateUserService } from "../service/CreateUserService";



class CreateUserController{
    async handle(request:Request, response:Response){
        const {nome, sexo, idade, dependente, estado} = request.body
        const createUserService = new CreateUserService()
        const user = await createUserService.execute({nome, sexo, idade, dependente, estado})
        const createClassificadosService = new CreateClassificadosService()
        const classificado = await createClassificadosService.execute(user.id)

        return response.status(200).json([user,classificado])
    }
}

class CreateUserEspecialController{
    async handle(request:Request, response:Response){
        const {nome, sexo, idade, estado, instituicao, vendedor, cuidador, voluntario, pesquisador} = request.body
        const createUserEspecialService = new CreateUserEspecialService
        const userEspecial = await createUserEspecialService.execute(
            {nome, sexo, idade, estado, instituicao, vendedor, cuidador, voluntario, pesquisador})
        return response.status(200).json(userEspecial)
    }
}

export{CreateUserController, CreateUserEspecialController}
    