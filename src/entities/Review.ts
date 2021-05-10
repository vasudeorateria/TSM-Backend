import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Review {

    @PrimaryColumn({length:2})
    id: string

    @Column({type:"text"})
    image: string

    @Column({type : "text"})
    review: string

}
