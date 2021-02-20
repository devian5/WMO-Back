const router = require('express').Router();
const userRouter = require('./routers/userRouter');

router.use('/user',userRouter)

module.exports = router