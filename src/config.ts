const API_ITEMS = 12;
const API_KEY_QUERY = "api_key";
const API_KEY =
  "live_lbmkzZkqKz5cYHgxEhBHJFYxR6ethZu4g33gGgP8lCWjbW00cPZwxrDLjecfo9BN";

export const API_URL = `https://api.thecatapi.com/v1/images/search?limit=${API_ITEMS}&${API_KEY_QUERY}=${API_KEY}`;
