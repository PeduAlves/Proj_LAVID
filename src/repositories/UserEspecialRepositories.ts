import { EntityRepository, Repository } from "typeorm";
import { UserEspecial } from "../Entities/UserEspecial";





@EntityRepository(UserEspecial)
class UserEspecialRepositories extends Repository<UserEspecial>{

}

export {UserEspecialRepositories}