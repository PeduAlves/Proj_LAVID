import { EntityRepository, Repository } from "typeorm";
import { userEspecial } from "../Entities/UserEspecial";





@EntityRepository(UserEspecial)
class UserEspecialRepositories extends Repository<UserEspecial>{

}

export {UserEspecialRepositories}