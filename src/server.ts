import express from 'express'
import {createConnection} from "typeorm";
import {Review} from "./entities/Review";
import {reviewRoute} from "./routes/reviews";
import {paymentRoute} from "./routes/payments";

const app = express()
app.use(express.json())

const { Client } = require('pg');

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/api/reviews', reviewRoute)
app.use('/api/payments', paymentRoute)

async function start() {

    await createConnection({
        type: 'postgres',
        username: 'tsm',
        password: 'tsm',
        database: 'tsm',
        entities: [Review],
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
