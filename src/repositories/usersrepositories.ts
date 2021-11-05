import { Entity, EntityRepository, Repository } from "typeorm";
import { users } from "../Entities/Users";



@EntityRepository(users)
class UsersRepositories extends Repository<users>{

}

export {UsersRepositories}
