// ============External Imports===========

const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");


//===========Internal Imports==============
const {errorHandler, notFountHandler} = require('./middlewares/common/errorhandler');

const loginRouter = require('./router/loginRouter');
const usersRouter = require('./router/usersRouter');
const inboxRouter = require('./router/inboxRouter')

const app = express();
dotenv.config();

//database Connecting

mongoose
  .connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected !"))
  .catch((err) => console.log(err));

//request parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

//set static folder

app.use(express.static(path.join(__dirname, "public")));

// parse cookie

app.use(cookieParser(process.env.COOKIE_SECRET_KEY));

//seup our routing
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter);


//error handeling
// 404 not founund error
app.use(notFountHandler);

//Common errors handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("http://localhost:"+ process.env.PORT);
});
