const Router = require('express');
const authController = require('../controllers/authContoller.js');
const { check } = require('express-validator');
const authMiddleware = require('../middleware/auth.middleware.js');

const router = new Router();
router.post('/registration',
    [
        check('username', 'Username must be longer than 2 symbols').isLength({ min: 2 }),
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Password must be longer than 4 symbols').isLength({ min: 4 })
    ], authController.registration);

router.post('/login', authController.login);
router.post('/logout', authMiddleware, authController.logout);
router.get('/auth', authMiddleware, authController.auth);



module.exports = router;
