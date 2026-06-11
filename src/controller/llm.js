import openClient from '../lib/openai.js';
import sytemPrompt from '../prompt/systemPrompt.js';
import { firecrawlScrape } from '../utils/firecrawlQuery.js';
import tryCatch from '../utils/tryCatch.js';

const userPrompt =
  'Generate two multiple-choice questions (MCQs) about the following topic: {topic}. Each question should have 1 correct answer and 3 distractors (incorrect options). Return the questions and options in a clear format.';

export const chat = tryCatch(async (req, res) => {
  const { topic } = req.body;

  const response = await openClient.chat.completions.create({
    model: 'openrouter/free',
    messages: [
      { role: 'system', content: sytemPrompt },
      { role: 'user', content: userPrompt.replace('{topic}', topic) },
    ],
  });

  res.json({ reply: response.choices[0].message.content });
});

export const firecrawlController = tryCatch(async (req, res) => {
  const { query } = req.body;
  // const results = await firecrawlQuery(query, 2);
  const result = await firecrawlScrape(query);
  res.json(result);
});
