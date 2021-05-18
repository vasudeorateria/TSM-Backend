import {Services} from "../entities/Services";
import {getRepository} from "typeorm";

export async function getServices(): Promise<Services[]> {
    return await getRepository(Services).find()
}