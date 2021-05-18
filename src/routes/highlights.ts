import {Router} from "express";
import {getHighlights} from "../controllers/highlights";

const route = Router()

// Read
route.get('/:serviceId/highlights', async (req, res) => {
    try {
        const serviceId = Number(req.params.serviceId)
        console.log(serviceId)
        const highlights = await getHighlights(serviceId)
        res.status(200).send(highlights)
    } catch (e) {
        return res.status(404).json(
            {
                errors: e.message
            }
        )
    }
})

export const highlightsRoute = route