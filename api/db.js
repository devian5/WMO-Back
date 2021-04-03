const mongoose = require('mongoose')

const url = process.env.MONGO_SERVER || 'mongodb://localhost:27017/wmo'
const db = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('DB is conencted to', db.connection.host)).then( console.log(process.env.MONGO_SERVER))
.catch(error => console.error(error));


module.exports = db
