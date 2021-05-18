import {Router} from "express";
import {getPlans} from "../controllers/plans";

const route = Router()

// Read
route.get('/:serviceId/plans', async (req, res) => {
    try {
        const serviceId = Number(req.params.serviceId)
        const plans = await getPlans(serviceId)
        res.status(200).send(plans)
    } catch (e) {
        return res.status(404).json(
            {
                errors: e.message
            }
        )
    }
})

export const plansRoute = route