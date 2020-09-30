require('dotenv').config();
const express = require('express');
const app = express();
const fs = require('fs');

const port = 4000;


const dbHost =  process.env.DB_HOST;
const dbPort =  process.env.DB_PORT;
const dbUser =  process.env.DB_USER;
const dbPassword    =  process.env.DB_PASSWORD;
const logLevel      =  process.env.LOG_LEVEL;
const podIp         =  process.env.POD_IP;

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/check', (req, res) => {
    
    res.send(`Hello world!\n${dbHost}:${dbPort} \nuser: ${dbUser}, password: ${dbPassword}\nlog level: ${logLevel}`);

    const file = fs.createWriteStream('logs/log.log', { flags: 'a' });
    file.write("new request to " + podIp + "!\n");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})