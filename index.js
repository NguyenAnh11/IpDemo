const express = require('express')
const requestIp = require('request-ip')

const app = express()

app.use(requestIp.mw())

app.get('/', (req, res) => {
    const { execSync } = require("child_process");

    const cmd = `curl -s http://checkip.amazonaws.com || printf "0.0.0.0"`;
    const pubIp = execSync(cmd).toString().trim();
    res.send(req.ip.split(':').pop())
})

app.listen(3000)
