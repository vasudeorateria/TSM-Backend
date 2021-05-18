import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Portfolios {

    @PrimaryGeneratedColumn("rowid")
    id: number

    @Column({array:true})
    images: string

    @Column({type : "text"})
    website: string

}