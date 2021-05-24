import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Highlights {

    @PrimaryGeneratedColumn("rowid")
    id: number

    @Column({type: "text"})
    animation: string

    @Column({type: "text"})
    description: string

    @Column({type: "text"})
    image: string

    @Column({type: "text"})
    name: string

    @Column({type: "integer"})
    serviceId: number

}