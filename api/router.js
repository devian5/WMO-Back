const router = require('express').Router();
const userRouter = require('./routers/userRouter');
const movieController = require('./routers/movieRouter');


router.use('/user',userRouter);
router.use('/movie',movieController);

module.exports = router