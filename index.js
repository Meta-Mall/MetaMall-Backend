import express from 'express';
import bodyParser from 'body-parser';
import connectAtlasDB from './connectDb.js';
import customerRouter from './routes/customer.router.js';
import cors from "cors";

let app = express();

connectAtlasDB();

app.use(express.json())
app.use(cors())
app.use("/customer/",customerRouter);


app.listen(4000, function() {
  console.log('Server listening at port 4000');
});




