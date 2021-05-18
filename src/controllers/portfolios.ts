import {getRepository} from "typeorm";
import {Portfolios} from "../entities/Portfolios";

export async function getPortfolios(): Promise<Portfolios[]> {
    return await getRepository(Portfolios).find({
    })
}

export async function getPortfolioImages(portfolioId:number): Promise<Portfolios[]> {
    return await getRepository(Portfolios).find({
         id: portfolioId
    })
}