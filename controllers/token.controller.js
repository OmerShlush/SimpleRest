import express from 'express';
import { getToken } from '../services/auth.service.js';

const router = express.Router();

router.get('/', (req, res, next) => {
    const token = getToken();
    res.status(200).send({token})
})

export { router };