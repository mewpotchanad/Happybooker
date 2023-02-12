// const {sequelize} = require('./models')
// sequelize.sync({force: true})




require('dotenv').config();
const express = require('express')
const cors = require('cors')
const chalk = require('chalk');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');


const app = express()

const authRoute = require('./routes/auth-route')
const notFoundMiddleware = require('./middlewares/not-found')
const errorMiddleware = require('./middlewares/error')

app.use(morgan('dev'))
app.use(
  rateLimit({
    windowMs: 1000 * 60 * 15,
    max: 1000,
    message: { message: 'too many requests, please try again later' }
  })
);

app.use(helmet());
app.use(cors())
app.use(express.json())

app.use('/auth', authRoute)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

app.listen()

const port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(chalk.yellowBright.italic.bold(`server running on port: ${port}`))
);


