import {Entity, PrimaryColumn,Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class classificados{
    
    @PrimaryColumn()
    readonly id: string;

    @Column()
    fknome: string

    @Column()
    idoso: boolean

    @Column()
    drogas: boolean

    @Column()
    alcool:boolean

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
