import express from 'express';
import {config} from 'dotenv';
import userRouter from './routes/userRouter.js'
config();


const PORT = process.env.PORT || 8000;
const app = express();

app.use('/api/users', userRouter );

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)});
