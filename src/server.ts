import express from 'express'
import {createConnection} from "typeorm"
import {Reviews} from "./entities/Reviews"
import {paymentRoute} from "./routes/payments"
import {servicesRoute} from "./routes/services"
import {Services} from "./entities/Services"
import {Highlights} from "./entities/Highlights"
import {Plans} from "./entities/Plans"
import {highlightsRoute} from "./routes/highlights"
import {plansRoute} from "./routes/plans"
import {reviewRoute} from "./routes/reviews"
import {Portfolios} from "./entities/Portfolios"
import {portfolioRoute} from "./routes/portfolios"

const app = express()
app.use(express.json())
app.use(express.static('images'))

const { Client } = require('pg');

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/api/reviews', reviewRoute)
app.use('/api/portfolios',portfolioRoute)
app.use('/api/payments', paymentRoute)
app.use('/api/services', servicesRoute)
app.use('/api/services', highlightsRoute)
app.use('/api/services', plansRoute)

async function start() {

    await createConnection({
        type: 'postgres',
        username: 'tsm',
        password: 'tsm',
        database: 'tsm',
        entities: [Services , Highlights , Plans , Reviews , Portfolios],
        synchronize: true,
        logging: true,
        logger: 'advanced-console'
    })

    const PORT = process.env.PORT || 3232

    app.listen(PORT, () => {
        console.log("Server started!! Listening to your requests")
    })
}

start()
