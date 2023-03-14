const express = require('express')
const requestIp = require('request-ip')

const app = express()

app.use(requestIp.mw())

app.get('/', (req, res) => {
    const { execSync } = require("child_process");

    const cmd = `curl -s http://checkip.amazonaws.com || printf "0.0.0.0"`;
    const pubIp = execSync(cmd).toString().trim();
    let ip = req.ip
    if (ip.substring(0, 7) === '::ffff:') {
        ip = ip.substring(7)
    }

    req.clientIp = ip
    res.send(req.clientIp)
})

app.listen(3000)
