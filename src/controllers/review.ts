import {Review} from "../entities/Review";
import {getRepository} from "typeorm";

export async function getReview() :Promise<Review[]>{
    const reviews = await getRepository(Review).find()
    console.log(reviews)
    return reviews
}

export async function createReview(review: Review){

    try {
        await getRepository(Review).save(review)
    }catch (e) {
        console.error(e)
    }

}