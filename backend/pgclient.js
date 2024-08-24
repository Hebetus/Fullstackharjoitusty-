const fs = require('fs')
const pg = require('pg')

const config = {
    user: "avnadmin",
    password: "AVNS_vj0TODpCOVaowSiYnUd",
    host: "pg-f403375-emilhellberg20-fullstackopen2024.l.aivencloud.com",
    port: "15357",
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync("./ca.pem").toString(),
    },
}

const client = new pg.Client(config)

client.connect(function (err) {
    if (err) {
        throw err
    }

    client.query("SELECT VERSION()", [], function (err, result) {
        if (err) {
            throw err
        }

        console.log(result.rows[0])

        client.end(function (err) {
            if (err) {
                throw err
            }
        })
    })
})