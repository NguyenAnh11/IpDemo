const express = require('express')
const request = require('bluebird').promisifyAll(require('request'))

const app = express()

app.get('/', async (req, res) => {
    const { body } = await request.getAsync('http://checkip.amazonaws.com')
    const ip = body.replace('\n', '')
    res.json(req.ip)
})

app.listen(3000, '0.0.0.0')
