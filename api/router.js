const router = require('express').Router();
const userRouter = require('./routers/userRouter');
const adminRouter = require('./routers/adminRouter');
const movieRouter = require('./routers/movieRouter');
const rentalRouter = require('./routers/rentalRouter');
const paymentRouter = require('./routers/paymentRouter')

router.use('/user',userRouter);
router.use('/admin',adminRouter);
router.use('/movie',movieRouter);
router.use('/order',rentalRouter);
router.use('/payment',paymentRouter)


module.exports = router