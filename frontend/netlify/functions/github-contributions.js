export async function handler(event, context) {
    const username = "kc2bj";
  
    try {
      const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
      if (!res.ok) {
        return {
          statusCode: res.status,
          body: JSON.stringify({ error: "Failed to fetch contributions" })
        };
      }
  
      const data = await res.json();
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: err.message })
      };
    }
  }
  