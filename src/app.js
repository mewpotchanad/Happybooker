// const { sequelize } = require("./models");
// sequelize.sync({ alter: true });

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const chalk = require("chalk");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

const authRoute = require("./routes/auth-route");
const userRoute = require("./routes/user-route");
const ebookRoute = require("./routes/ebook-route");
const adminRoute = require("./routes/admin-route");
const notFoundMiddleware = require("./middlewares/not-found");
const errorMiddleware = require("./middlewares/error");
const authenticateMiddleware = require("./middlewares/authenticate");

app.use(morgan("dev"));
app.use(
  rateLimit({
    windowMs: 1000 * 60 * 60,
    max: 1000,
    message: { message: "too many requests, please try again later" }
  })
);

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/user", authenticateMiddleware, userRoute);
app.use("/ebook", authenticateMiddleware, ebookRoute);
app.use("/admin", authenticateMiddleware, adminRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen();

const port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(chalk.yellowBright.italic.bold(`server running on port: ${port}`))
);
