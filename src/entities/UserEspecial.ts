import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid} from "uuid";


@Entity()
export class userEspecial {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string
    
    @Column()
    sexo: string

    @Column("int")
    idade: number

    @Column()
    estado: string

    @Column()
    instituicao: string

    @Column()
    vendedor: boolean

    @Column()
    cuidador: boolean

    @Column()
    voluntario: boolean

    @Column()
    pesquisador: boolean

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