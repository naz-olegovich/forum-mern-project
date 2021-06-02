const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')
const config = require('config')


class AuthController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: 'Incorrect request', errors })
            }

            const { userName, email, password } = req.body;
            const candidate = await User.findOne({ email });
            if (candidate) {
                return res.status(400).json({ message: `User with email ${email} already exist` })
            }

            const hashPassword = await bcrypt.hash(password, 7)
            const user = new User({ userName, email, password: hashPassword })
            await user.save()
            const token = jwt.sign({ id: user.id }, config.get("secretKey"), { expiresIn: "1h" })
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                }
            })

        } catch (e) {
            console.log(e)
            return res.status(500).json({ message: "Server error" })
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(404).json({ message: "User not found" })
            }
            const isPassValid = bcrypt.compareSync(password, user.password)
            if (!isPassValid) {
                return res.status(400).json({ message: "Invalid password" })
            }
            const token = jwt.sign({ id: user.id }, config.get("secretKey"), { expiresIn: "1h" })
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                }
            })
        } catch (e) {
            console.log(e)
            res.send({ message: "Server error" })
        }
    }

    async auth(req, res) {
        try {
            const user = await User.findOne({ _id: req.user.id })
            const token = jwt.sign({ id: user.id }, config.get("secretKey"), { expiresIn: "1h" })

            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                }
            })
        } catch (e) {
            console.log(e)
            res.send({ message: "Server error" })
        }
    }
}


module.exports = new AuthController()