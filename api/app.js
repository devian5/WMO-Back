const express = require('express');
const router = require('./router');
const app = express()
const db = require('./db')
const port = 3000

app.use(express.json());

app.use(router);
db.then(()=>{
    app.listen(port, () => {
        console.log('I am ready!!');
    })

}).catch(console.log);

