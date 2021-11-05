import {Entity, PrimaryColumn,Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne} from "typeorm";
import { v4 as uuid } from "uuid";
import { users } from "./users";


// Definindo a tabela de classificados, que so separa as pessoas idosas e dependentes
// dos demais usuarios
@Entity()
export class classificados{
    
    @PrimaryColumn()
    readonly id: string;

    @Column()
    fknome: string

    @JoinColumn({name:"fknome"})
    @OneToOne(()=>users,{onDelete:"CASCADE"})
    nome: users

    @Column()
    idoso: boolean

    @Column()
    drogas: boolean

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
