import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import productRouters from './src/routers/productRouters.js';
import userRouters from './src/routers/userRouters.js';
import orderRouters from './src/routers/orderRouters.js';

const app = express();
const port = 5000;
const url = "mongodb+srv://admin:zuJluW4mJuopJCvF@cluster0.8knnuu2.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('mongodb connected')
        app.listen(port, () => console.log(`server is running at port ${port}`))
    })
    .catch((err) => {
        console.log("error: " + err)
    }
    )

app.use(cors({
    origin: '*',
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/products', productRouters);
app.use('/users', userRouters);
app.use('/orders', orderRouters);



