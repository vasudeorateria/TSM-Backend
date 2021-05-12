
require('dotenv').config()

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function createPaymentIntent(amount: bigint, currency: string) {
    return await stripe.paymentIntents.create(
        {
            'amount': amount,
            'currency': currency,
        }
    )
}