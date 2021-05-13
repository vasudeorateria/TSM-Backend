import {Router} from "express";
import {createPaymentIntent} from "../controllers/payments";

const route = Router()

route.get('/config' , (req , res)=>{
    try{
        res.status(200).json(
            {
                publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
            }
        )
    }catch(e){
        res.status(404).json(
            {
                errors: e.message
            }
        )
    }
})


route.post('/create-payment-intent', async (req, res) => {

    try {
        const {amount, currency, description} = req.body

        const intent = await createPaymentIntent(amount, currency , description)
        res.status(200).json(
            {
                clientSecret: intent.client_secret,
            }
        )
    } catch (e) {
        res.status(404).json(
            {
                errors: e.message
            }
        )
    }
})

export const paymentRoute = route