import express from 'express';
import { login } from '../controllers/accountController';

const router = express.Router();

console.log("routes")
router.post('/login', login);

export default router;