import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Services{

    @PrimaryGeneratedColumn("rowid")
    id: number

    @Column({type:"text"})
    description: string

    @Column({type : "text"})
    image: string

    @Column({type : "text"})
    name: string
}