import openClient from '../lib/openai.js';
import tryCatch from '../utils/tryCatch.js';

const sytemPrompt =
  'You are an AI assistant that generates multiple-choice questions (MCQs) for learning purposes. You should provide questions suitable for a teacher-level audience, using easy and simple words.';
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
