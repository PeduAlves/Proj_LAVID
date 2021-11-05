import { Request, Response } from "express";
import { CreateClassificadosService } from "../service/CreateClassificadosService";
import { CreateUserService } from "../service/CreateUserService";


// definindo o contorller que vai chamar e executar o serviço de criação de usuario
// e o serviço de classificados que separa os usuarios dependentes e idosos dos demais
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

export{CreateUserController}
    