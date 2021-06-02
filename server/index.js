const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('config')
const authRouter = require('./routes/authRouter.js')

const app = express();
const PORT = process.env.PORT || config.get('serverPort');

app.use(cors())
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/auth/', authRouter)



const start = async () => {
    try {
        await mongoose.connect(config.get('dbUrl'),
            { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, 'useCreateIndex': true })
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()