export async function getData(endpoint: string, queryParams?: Record<string, any>) {
  const BASE_URL = 'https://mira-strapi-dev.q.starberry.com/api';

  // Build full URL with optional query parameters
  const query = queryParams
    ? '?' + new URLSearchParams(queryParams).toString()
    : '';
  const fullUrl = `${BASE_URL}/${endpoint}${query}`;

  try {
    const res = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error('API error:', err);
    throw err;
  }
}
