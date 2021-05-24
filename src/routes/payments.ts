import {Router} from "express";
import {createPaymentIntent, getServiceNames} from "../controllers/payments";
import {getPortfolios} from "../controllers/portfolios";

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

route.get('/service-names-list' , async (req , res)=>{
    try {
        const serviceNames = await getServiceNames()
        res.status(200).send(serviceNames)
    }catch(e){
        res.status(404).json(
            {
                errors: e.message
            }
        )
    }
})

export const paymentRoute = route