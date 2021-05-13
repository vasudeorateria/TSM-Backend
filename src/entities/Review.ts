import {Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Review {

    @PrimaryGeneratedColumn("rowid")
    id: string

    @Column({type:"text"})
    image: string

    @Column({type : "text"})
    review: string

}
