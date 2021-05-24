import {getRepository} from "typeorm";
import {Portfolios} from "../entities/Portfolios";
import {Services} from "../entities/Services";

require('dotenv').config()

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function createPaymentIntent(
    amount: bigint,
    currency: string,
    description: string
) {
    return await stripe.paymentIntents.create(
        {
            'amount': amount,
            'currency': currency,
            'description': description
        }
    )
}

export async function getServiceNames():Promise<string[]> {

    var services = await getRepository(Services).find({
        select: ["name"]
    })
    const serviceNameList: string[] = [];
    services.forEach((value, index, array)=>{
        serviceNameList[index] = value.name
    })
    return serviceNameList
}