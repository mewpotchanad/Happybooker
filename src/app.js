require('dotenv').config();
const express = require('express')
const cors = require('cors')
const chalk = require('chalk');
const morgan = require('morgan');
const helmet = require('helmet');


const app = express()

const notFoundMiddleware = require('./middlewares/not-found')
const errorMiddleware = require('./middlewares/error')

app.use(morgan('dev'))
app.use(helmet());
app.use(cors())
app.use(express.json())

app.use(notFoundMiddleware)
app.use(errorMiddleware)

app.listen()

const port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(chalk.yellowBright.italic.bold(`server running on port: ${port}`))
);