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
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    // Flatten the weekly contributions into one array and filter by date
    const contributions = data.weeks
      .flatMap(week => week.contributionDays)
      .filter(day => new Date(day.date) >= oneYearAgo)
      .map(day => ({
        date: day.date,
        count: day.contributionCount,
      }));

    return {
      statusCode: 200,
      body: JSON.stringify({ contributions })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}
