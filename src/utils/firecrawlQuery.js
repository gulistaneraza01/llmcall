import firecrawlClient from '../lib/firecrawlClient.js';

export const firecrawlQuery = async (query, limit) => {
  const results = await firecrawlClient.search(query, { limit: 5 });
  return results;
};

export const firecrawlScrape = async (url) => {
  const result = await firecrawlClient.scrape(url);
  return result;
};
