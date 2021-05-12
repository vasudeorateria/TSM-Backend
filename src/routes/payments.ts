import {Router} from "express";
import {createPaymentIntent} from "../controllers/payments";

const route = Router()

route.post('/create-payment-intent', async (req, res) => {

    try {
        const {amount, currency} = req.body;
        const intent = await createPaymentIntent(amount, currency)
        res.status(200).json(
            {
                clientSecret: intent.client_secret,
                'amount': amount,
                'currency': currency
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

export const paymentRoute = route