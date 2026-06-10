import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;
const openAi_api_key = process.env.OPENAI_API_KEY;
const anthropic_api_key = process.env.OPENAI_API_KEY;

export { anthropic_api_key, openAi_api_key, port };
