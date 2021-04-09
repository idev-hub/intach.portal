import {getConnection} from "typeorm";
import {Institution} from "../../entity/Institution";

export namespace InstitutionsController {
    export async function getMore(): Promise<Institution[]> {
        const repository = getConnection().getRepository(Institution)
        return await repository.find()
    }

    export async function get(id: number): Promise<Institution> {
        const repository = getConnection().getRepository(Institution)
        return await repository.findOneOrFail(id)
    }

    export async function create(data: Institution) {
        const repository = getConnection().getRepository(Institution)
        await repository.save(new Institution(data.name))
    }

    export async function update(id: number, data: { [key: string]: any }) {
        const repository = getConnection().getRepository(Institution)
        const item = await get(id)

        item.name = data.name

        await repository.save(item)
    }

    export async function remove(id: number) {
        const repository = getConnection().getRepository(Institution)
        await repository.remove(await get(id))
    }
}