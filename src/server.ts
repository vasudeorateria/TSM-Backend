import express from 'express'
import {ConnectionOptions, createConnection} from "typeorm"
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
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";

const app = express()
app.use(express.json())
app.use(express.static('images'))

const {Client} = require('pg');

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/api/reviews', reviewRoute)
app.use('/api/portfolios', portfolioRoute)
app.use('/api/payments', paymentRoute)
app.use('/api/services', servicesRoute)
app.use('/api/services', highlightsRoute)
app.use('/api/services', plansRoute)

async function start() {

    const PORT = process.env.PORT || 3232

    app.listen(PORT, () => {
        console.log("Server started!! Listening to your requests")
    })

    const localConnection: ConnectionOptions = {
        type: 'postgres',
        username: 'tsm',
        password: 'tsm',
        database: 'tsm',
        entities: ['dist/entities/*'],
        synchronize: true,
        logging: true,
        logger: 'advanced-console'
    }

    const herokuConnection: ConnectionOptions = {
        type: 'postgres',
        host: 'ec2-54-161-239-198.compute-1.amazonaws.com',
        port: 5432,
        username: 'xhnhbbwtpytvau',
        password: '213f65bf3cc83485e1892c8eeed8f582ab0c3ea0d68f437e920e6869126c8cf7\n',
        database: 'd1ahk1po911rag',
        entities: ['dist/entities/*'],
        synchronize: true,
        logging: true,
        logger: 'advanced-console'
    }

    const chooseConnection = (PORT == 3232) ? localConnection : herokuConnection
    await createConnection(localConnection)

}

start()
