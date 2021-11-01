import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class usuario1635795844439 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary: true,
                    },
                    {
                        name:"nome",
                        type:"varchar",
                    },
                    {
                        name:"sexo",
                        type:"varchar",
                    },
                    {
                        name:"idade",
                        type:"int",
                    },
                    {
                        name:"dependente",
                        type:"varchar",
                    },
                    {
                        name:"estado",
                        type:"varchar",
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()",
                    },
                    {
                        name:"updated_at",
                        type:"timestamp",
                        default:"now()",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
