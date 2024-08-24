const fs = require('fs');
const pg = require('pg');
const url = require('url');

const config = {
    user: "avnadmin",
    password: "AVNS_vj0TODpCOVaowSiYnUd",
    host: "pg-f403375-emilhellberg20-fullstackopen2024.l.aivencloud.com",
    port: 15357,
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUPWwVLVgNTkOpqSBMMQGK2j4g1TswDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvYzJjOGE0NTctMjk2Yi00MzU4LThmYjQtYmUyMWZkZjc0
MDhlIFByb2plY3QgQ0EwHhcNMjQwODE0MDk0NzIwWhcNMzQwODEyMDk0NzIwWjA6
MTgwNgYDVQQDDC9jMmM4YTQ1Ny0yOTZiLTQzNTgtOGZiNC1iZTIxZmRmNzQwOGUg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAK628jTH
4PGuwfJzo7vJ4Y7y/kPXEaeyM3rtdyfikYbQaMMgcNyzYDvlNlsRon7sFXznMwFK
/5BrwyAYziOQmB/A5DGGwTiUjD3FmUXAJOzuNjTaknlyJ/7Qd0sPiIGN6YQ7qKtu
C6yf/rd1xamkUmdunxbLRmJqPyRMgGNlABIDPJOtj82ARACgClTG3cc1HNpJZ4Y3
hxYCoZpKZGlpYRj/UaecIfwUOonybCMZTJQizo1L+1FseBz4qdHrhrCcNnbjncrD
DGBbh5XEqTd8I1fx8Pi+3Nll/h8ZD3eoelwTy/aM2GOyBWRhdjzJUBLX0paXcH+R
b/iKl1RRhuoaNkWkjbtKnCHp5Ge/CD0TxGz5PjWRAZwm5jkfYOvoQW+hwhy8LP/d
5kY0tnYDcOZmyPgP29vZ//OU559HQ9ZrAw4RI+aAQ2N4VlGRl/yZA34dSt5yUMnz
AvMrY6ETsP56Xl5Ed8taTH+BGsUoX0+38dShRd38Z6dnVYBtkile+9TDowIDAQAB
oz8wPTAdBgNVHQ4EFgQU/axTAB0C91zkAPwLbjH1nlKsr/cwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAH7UC7O6MXnUwt3D
eTRf3wv98opITRaN7DLuBnfVIYWz6QJMPn9PEDnTCO+RUpDFG1jHdKbJmn1NZRt8
lPD7QYjcnaoB5fTu6JouqviXuZUp+goFcoFMmLW/Mjm7W2C/l4MMWJcVAAiWAj7N
jlwg9tJNHG4PNlXRVy4DJQ6V3D6jLHLd+trDfIUkSr6bIRpvMySZleNS4fcONBFx
+vohSST/YIv0RAOX58eF28IEUX9TPhIn5OwQg2AX4oy3O95Q5pr+nA2QD+Z1A160
IG8RPFfXiqHWGL0FilfoqWjZXIvZ7BzumYv6erljgRa3GUxJ67CEnDyKDnAsTnQT
r8IBjiKuz1F4NXGuITIIeH1phONryEe/uOFG+9xsv8fEyRKX+0FOHf9qMfRzvNKr
wXe0hwJS+sl1Rbn9sfzrpiiVLOcOHHLl/k1vrufshY4DqEPQ09p12VEIpxKmXsQQ
NRESSjRVr5c5D9hHZAjbhcMUour9EjUhBuTULGCMsOqIXO/YyA==
-----END CERTIFICATE-----`,
    },
};

const client = new pg.Client(config);

client.connect(function (err) {
    if (err)
        throw err;
    client.query("SELECT VERSION()", [], function (err, result) {
        if (err)
            throw err;

        console.log(result.rows[0].version);
        client.end(function (err) {
            if (err)
                throw err;
        });
    });
});