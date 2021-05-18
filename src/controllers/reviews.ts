import {Reviews} from "../entities/Reviews";
import {getRepository} from "typeorm";


// create
export async function createReview(review: Reviews) {

    try {
        await getRepository(Reviews).save(review)
    } catch (e) {
        console.error(e)
    }

}

// read
export async function getReview(): Promise<Reviews[]> {
    return await getRepository(Reviews).find()
}

// update
export async function updateReview(review: Reviews) {

    try {
        await getRepository(Reviews).save(review)
    } catch (e) {
        console.error(e)
    }

}

// delete
export async function deleteReview(id: string) {
    return await getRepository(Reviews).delete(id)
}