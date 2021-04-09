import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Institution {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    short_name: string

    @Column()
    address: string

    @Column()
    email: string

    @Column()
    phone: string

    @Column()
    domain: string

    constructor(name: string, short_name: string, address: string, email: string, phone: string, domain: string) {
        this.name = name
        this.short_name = short_name
        this.address = address
        this.email = email
        this.phone = phone
        this.domain = domain
    }
}