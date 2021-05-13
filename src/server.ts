import express from 'express'
import {createConnection} from "typeorm";
import {Review} from "./entities/Review";
import {reviewRoute} from "./routes/reviews";
import {paymentRoute} from "./routes/payments";

import { createServer, IncomingMessage, ServerResponse } from 'http';


const app = express()
app.use(express.json())

const { Client } = require('pg');

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/api/reviews', reviewRoute)
app.use('/api/payments', paymentRoute)

async function start() {

    // await createConnection({
    //     type: 'postgres',
    //     username: 'tsm',
    //     password: 'tsm',
    //     database: 'tsm',
    //     entities: [Review],
    //     synchronize: true,
    //     logging: true,
    //     logger: 'advanced-console'
    // })

    const PORT = process.env.PORT || 3232

    const server = createServer((request: IncomingMessage, response: ServerResponse) => {
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false
            }
        })
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/plain')
        client.connect()
            .then(() => client.query('SELECT * FROM hellotable'))
            .then((result : any) => {
                response.end(`${result.rows[0].name}\n`)
                client.end()
            })
            .catch(() => {
                response.end('ERROR')
                client.end()
            })
    })

    server.listen(5432, () => {
        console.log(`Database Server running on port 5432`)
    })


    app.listen(PORT, () => {
        console.log("Server started!! Listening to your requests")
    })
}

start()
