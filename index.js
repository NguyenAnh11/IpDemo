const express = require('express')
const request = require('bluebird').promisifyAll(require('request'))

const app = express()

app.use(requestIp.mw())

app.get('/', async (req, res) => {
    const { body } = await request.getAsync('http://checkip.amazonaws.com')
    const ip = body.replace('\n', '')
    res.json(ip)
})

app.listen(3000)
