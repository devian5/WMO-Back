const express = require('express').Router();
const app = express()

const port = 3000

app.use(express.json());

app.listen(port, () => {
    console.log('I am ready!!')
})

