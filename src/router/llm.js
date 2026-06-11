import { Router } from 'express';
import { chat, firecrawlController } from '../controller/llm.js';

const route = Router();

route.post('/chat', chat);
route.post('/firecrawl', firecrawlController);

export default route;
