const router = require('express').Router();
const userRouter = require('./routers/userRouter');
const movieRouter = require('./routers/movieRouter');
const rentalRouter = require('./routers/rentalRouter');

router.use('/user',userRouter);
router.use('/movie',movieRouter);
router.use('/order',rentalRouter);

module.exports = router