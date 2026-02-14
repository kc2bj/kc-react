export async function handler() {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  const query = `
    query {
      viewer {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
          totalCommitContributions
          totalPullRequestContributions
          totalIssueContributions
          commitContributionsByRepository(maxRepositories: 100) {
            repository {
              name
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();
    const collection = result.data?.viewer?.contributionsCollection;
    if (!collection) {
      return {
        statusCode: 200,
        body: JSON.stringify({ contributions: [], recap: null }),
      };
    }

    const calendar = collection.contributionCalendar;
    const days = (calendar?.weeks ?? [])
      .flatMap((week) => week.contributionDays)
      .map((day) => ({
        date: day.date,
        count: day.contributionCount,
        color: day.color,
      }));

    const repoCount = collection.commitContributionsByRepository?.length ?? 0;
    const totalCommits = collection.totalCommitContributions ?? 0;
    const totalPRs = collection.totalPullRequestContributions ?? 0;
    const totalIssues = collection.totalIssueContributions ?? 0;
    const totalContributions = calendar?.totalContributions ?? 0;
    const totalActions = totalCommits + totalPRs + totalIssues;
    const commitPct = totalActions > 0 ? Math.round((totalCommits / totalActions) * 100) : 0;
    const prPct = totalActions > 0 ? Math.round((totalPRs / totalActions) * 100) : 0;
    const issuePct = totalActions > 0 ? Math.round((totalIssues / totalActions) * 100) : 0;

    const recap = {
      totalContributions,
      repositoryCount: repoCount,
      totalCommits,
      totalPullRequests: totalPRs,
      totalIssues,
      commitPercent: commitPct,
      pullRequestPercent: prPct,
      issuePercent: issuePct,
    };

    return {
      statusCode: 200,
      body: JSON.stringify({ contributions: days, recap }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
