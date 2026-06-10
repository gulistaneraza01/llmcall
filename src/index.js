import express from 'express';
import llmRoutes from './router/llm.js';

const app = express();
app.disable('x-powered-by');
const port = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ msg: 'server is runing 🚀' });
});

//api routes
app.use('/api/v1/ai', llmRoutes);

//server listening
app.listen(port, () => console.log(`Server running on :${port}`));
