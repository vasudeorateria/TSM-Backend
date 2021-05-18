import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Reviews {

    @PrimaryGeneratedColumn("rowid")
    id: number

    @Column({type:"text"})
    image: string

    @Column({type : "text"})
    review: string

}
