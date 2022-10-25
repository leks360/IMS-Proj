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
import fs from 'fs';
import {fileURLToPath} from 'url';


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

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/Client/build")));

app.get('*', (req, res) => {
    console.log(__dirname);
    fs.readdir(__dirname+"/Client/", (err, files) => {
        console.log("PRINITNG THE FILES");
        files.forEach(file => {
          console.log(file);
        });
      });
  res.sendFile(path.join(__dirname, '/Client/build', 'index.html'));
});

app.listen(process.env.PORT ||3000,()=>{
    console.log("starting Server");
});