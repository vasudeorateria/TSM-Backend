import {getRepository} from "typeorm";
import {Plans} from "../entities/Plans";

export async function getPlans(serviceId: number): Promise<Plans[]> {
    return await getRepository(Plans).find(
        {
            where:{"serviceId": serviceId},
            order: {id: "DESC"}
        }
    )
}