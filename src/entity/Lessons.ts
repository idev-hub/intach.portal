import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import ILessonItem from "../interfaces/ILessonItem";

@Entity()
export class Lessons {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date

    @Column()
    institutionId: number

    @Column()
    group: string

    @Column({type: "json"})
    items: Array<ILessonItem>

    constructor(institutionId: number, date: Date, group: string, items: Array<ILessonItem>) {
        this.institutionId = institutionId
        this.date = date
        this.group = group
        this.items = items
    }
}