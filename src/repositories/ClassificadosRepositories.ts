import { EntityRepository, Repository } from "typeorm";
import { classificados } from "../Entities/Classificados";



@EntityRepository(classificados)
class ClassificadosRepositories extends Repository<classificados>{

}

export {ClassificadosRepositories}