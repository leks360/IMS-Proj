import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/authRoute.js';
import quarryRoute from './routes/quarryRoute.js';
import dispatchRoute from './routes/dispatchRoute.js';
import levyRoute from './routes/levyRoute.js';
import doRoute from './routes/doRoute.js';
import penalty from './routes/penaltyRoute.js';
import inspection from './routes/inspectionRoute.js';
import userRoute from './routes/userRoute.js';
import cors from 'cors';
import cookieparser from 'cookie-parser';
import path from 'path';
const __dirname = path.resolve();
dotenv.config();

const app=express();
app.use(cors({
    origin: true,
     credentials: true }));
app.use(express.json());
app.use(cookieparser());
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB connected");
})

//routes

app.use('/api/auth',authRoute);
app.use('/api/quarry',quarryRoute);
app.use('/api/user',userRoute);
app.use('/api/levies',levyRoute);
app.use('/api/dispatch',dispatchRoute);
app.use('/api/do',doRoute);
app.use('/api/penalty',penalty);
app.use('/api/inspection',inspection);

app.use(express.static(path.join(__dirname, "./Client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./Client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});
const PORT=process.env.port||3000;

app.listen(PORT,()=>{
    console.log("starting");
});