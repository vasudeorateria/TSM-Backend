import {Review} from "../entities/Review";
import {getRepository} from "typeorm";

export async function getReview() :Promise<Review[]>{
    return await getRepository(Review).find()
}

export async function createReview(review: Review){

    try {
        await getRepository(Review).save(review)
    }catch (e) {
        console.error(e)
    }

}