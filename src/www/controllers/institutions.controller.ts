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
        await repository.save(new Institution(
            data.name,
            data.short_name,
            data.address,
            data.email,
            data.phone,
            data.domain
        ))
    }

    export async function update(id: number, data: { [key: string]: any }) {
        const repository = getConnection().getRepository(Institution)
        const item = await get(id)

        if (data.name) item.name = data.name
        if (data.short_name) item.short_name = data.short_name
        if (data.address) item.address = data.address
        if (data.email) item.email = data.email
        if (data.phone) item.phone = data.phone
        if (data.domain) item.domain = data.domain

        await repository.save(item)
    }

    export async function remove(id: number) {
        const repository = getConnection().getRepository(Institution)
        await repository.remove(await get(id))
    }
}