import express from 'express'
import {createConnection} from "typeorm";
import {Review} from "./entities/Review";
import {reviewRoute} from "./routes/reviews";
import {paymentRoute} from "./routes/payments";

const app = express()
app.use(express.json())

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

    app.listen(3232, () => {
        console.log("Server started on http://localhost:3232")
    })
}

start()

