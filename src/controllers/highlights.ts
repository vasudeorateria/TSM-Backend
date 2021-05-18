import {getRepository} from "typeorm";
import {Highlights} from "../entities/Highlights";

export async function getHighlights(serviceId: number): Promise<Highlights[]> {
    return await getRepository(Highlights).find(
        {
            "serviceId" : serviceId
        }
    )
}