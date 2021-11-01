import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";

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
