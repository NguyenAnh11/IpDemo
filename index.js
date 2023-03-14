const express = require('express')
const request = require('bluebird').promisifyAll(require('request'))

const app = express()

app.get('/', async (req, res) => {
    const { body } = await request.getAsync('http://checkip.amazonaws.com')
    const ip = body.replace('\n', '')
    const s = req.headers['x-forwarded-for']
    res.json(s)
})

app.listen(3000)
