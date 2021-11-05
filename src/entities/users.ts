import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";


// Definindo as informações necessarias para ser um usuario, e seus tipos
@Entity()
export class users {
    @PrimaryColumn()
    readonly id: string;
    
    @Column()
    nome: string

    @Column()
    sexo: string

    @Column("int")
    idade: number

    @Column()
    dependente:string

    @Column()
    estado: string

// create e update date, é para saber quando foi criado e upado, e não é
// preenchido pelo usuario
    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    constructor(){
        if(!this.id){
            this.id=uuid()
        }

    }
}
