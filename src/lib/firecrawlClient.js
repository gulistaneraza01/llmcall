import Firecrawl from 'firecrawl';
import { firecrawl_api_key } from '../utils/constraints.js';

const firecrawlClient = new Firecrawl({ apiKey: firecrawl_api_key });

export default firecrawlClient;
