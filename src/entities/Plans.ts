import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Plans {

    @PrimaryGeneratedColumn("rowid")
    id: number

    @Column({type: "text"})
    color: string

    @Column({array: true})
    features: string

    @Column({type: "text"})
    name: string

    @Column({type: "text"})
    price: string

    @Column({type: "integer"})
    serviceId: number
}