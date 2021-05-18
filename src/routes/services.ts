import {Router} from "express";
import {getServices} from "../controllers/services";

const route = Router()

// Read
route.get('/', async (req, res) => {
    try {
        const services = await getServices()
        res.status(200).send(services)
    } catch (e) {
        return res.status(404).json(
            {
                errors: e.message
            }
        )
    }
})

/*

// Create
route.post('/create', async (req, res) => {

    try {
        await createReview(req.body.review)
        return res.status(200).json(
            {
                message: "Reviews Created"
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

// Update
route.put('update', async (req, res) => {
    try {
        await updateReview(req.body.review)
        return res.status(200).json(
            {
                message: "Reviews Updated"
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

route.delete('delete', async (req, res) => {
    try {
        await deleteReview(req.body.id)
        return res.status(200).json(
            {
                message: "Reviews Updated"
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

*/

export const servicesRoute = route