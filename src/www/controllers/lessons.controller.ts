import {getConnection} from "typeorm";
import {Institution} from "../../entity/Institution";
import {Lessons} from "../../entity/Lessons";

export namespace LessonsController {
    export async function getMore(): Promise<Lessons[]> {
        const repository = getConnection().getRepository(Lessons)
        return await repository.find()
    }

    export async function get(id: number): Promise<Lessons> {
        const repository = getConnection().getRepository(Lessons)
        return await repository.findOneOrFail(id)
    }

    export async function create(data: Lessons) {
        const repository = getConnection().getRepository(Lessons)
        await repository.save(new Lessons(
            data.institutionId,
            data.date,
            data.group,
            JSON.parse(data.items.toString())
        ))
    }

    export async function update(id: number, data: { [key: string]: any }) {
        const repository = getConnection().getRepository(Lessons)
        const item = await get(id)

        if (data.institutionId) item.institutionId = data.institutionId
        if (data.date) item.date = data.date
        if (data.group) item.group = data.group
        if (data.items) item.items = JSON.parse(data.items)

        await repository.save(item)
    }

    export async function remove(id: number) {
        const repository = getConnection().getRepository(Lessons)
        await repository.remove(await get(id))
    }
}