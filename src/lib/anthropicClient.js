import Anthropic from '@anthropic-ai/sdk';
import { anthropic_api_key } from '../utils/constraints.js';

const anthropicClient = new Anthropic({
  apiKey: anthropic_api_key,
  baseURL: 'https://openrouter.ai/api/v1',
});

export default anthropicClient;
