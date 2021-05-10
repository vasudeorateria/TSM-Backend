import {Router} from "express";
import {getRepository} from "typeorm";
import {Review} from "../entities/Review";
import {createReview, getReview} from "../controllers/review";

const route = Router()

route.get('/', async (req, res) => {
    const reviews = await getReview()
    console.log("inside router ")
    console.log(reviews)
    console.log("inside router ")
    res.json({reviews}).status(200)

})

route.post('/create-review', async (req, res) => {

    try {
        console.log(req.body)
        await createReview(req.body.review)
        return res.status(200).json({message: "Review Created"})
    } catch (e) {
        return res.status(404).json({
            errors: { body: [ e.message ] }
        })
    }

})

export const reviewRoute = route