import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class classificados1635797795607 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"classificados",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary: true,
                    },
                    {
                        name:"fknome",
                        type:"varchar",                       
                    },
                    {
                        name:"idoso",
                        type:"boolean",
                    },
                    {
                        name:"drogas",
                        type:"boolean",
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
                    },
                ],
                foreignKeys:[
                    {
                        name:"fknome_usario",
                        referencedTableName:"users",
                        referencedColumnNames:["id"],
                        columnNames:["fknome"],
                        onDelete:"CASCADE",
                        onUpdate:"SET NULL",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("classificados")
    }

}
