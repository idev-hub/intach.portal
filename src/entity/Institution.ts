import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Institution {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    constructor(name: string) {
        this.name = name
    }
}