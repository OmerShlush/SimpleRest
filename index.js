import express from 'express';
import cors from 'cors';
import { router as postRouter } from './controllers/post.controller.js';
import { router as tokenRouter } from './controllers/token.controller.js';
import { verifyToken } from './middlewares/auth.js';



const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/token', tokenRouter)
app.use('/posts', verifyToken, postRouter);

app.listen(4000, () => {
    console.log('Listening on port 4000.')
})