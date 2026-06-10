import { Router } from 'express';
import { chat } from '../controller/llm.js';

const route = Router();

route.post('/chat', chat);

export default route;
