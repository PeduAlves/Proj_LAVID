import { EntityRepository, Repository } from "typeorm";
import { classificados } from "../entities/classificados";



@EntityRepository(classificados)
class ClassificadosRepositories extends Repository<classificados>{

}

export {ClassificadosRepositories}