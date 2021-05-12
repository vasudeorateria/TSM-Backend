import {Router} from "express";
import {createReview, getReview} from "../controllers/reviews";

const route = Router()

route.get('/', async (req, res) => {
    try {
        const reviews = await getReview()
        res.status(200).json(
            {
                reviews
            }
        )
    } catch (e) {
        return res.status(404).json(
            {
                errors: e.message
            }
        )
    }
})

route.post('/create', async (req, res) => {

    try {
        await createReview(req.body.review)
        return res.status(200).json(
            {
                message: "Review Created"
            }
        )
    } catch (e) {
        return res.status(404).json(
            {
                errors: e.message
            }
        )
    }

})

export const reviewRoute = route