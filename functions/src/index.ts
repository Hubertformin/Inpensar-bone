import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

import * as express from 'express';
import {join} from 'path';
import * as cookieParser  from 'cookie-parser';
import * as logger from 'morgan';
import {connect, connection} from "mongoose";
import * as cors from 'cors';

// import routers
import UserRouter from './routers/user.router';
import TransactionRouter from "./routers/transaction.router";
import CategoryRouter from "./routers/categories.model";


const app = express();
app.use(cors());

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Connect to database
const MONGODB_URI = "mongodb+srv://nudle:nudle@cluster0.aahux.mongodb.net/coreDB?retryWrites=true&w=majority";

connect(MONGODB_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true
}).catch(err => console.log(err));


connection.on("connected", () => {
  console.log("[MONGOOSE]: onnected to database!");
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/users', UserRouter);
app.use('/transactions', TransactionRouter);
app.use('/categories', CategoryRouter);
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

export const helloWorld = functions.https.onRequest(app);

