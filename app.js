import express from 'express';
import cookieParser from 'cookie-parser';

import {PORT} from './config/env.js';

//import routes
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';

const app=express();

//built in middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions',subscriptionRouter);

app.use(errorMiddleware);

app.get('/',(req,res)=> {
    res.send('Welcome to the Subscription Traker API!');
});

app.listen(PORT,async()=>{
    console.log(`Subscrition Tracker API is running on http://localhost:${PORT}`);

    //Connect to database
    await connectToDatabase();
});

export default app;