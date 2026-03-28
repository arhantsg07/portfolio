import { NextResponse } from "next/server";

const query = `
  query($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

const levelMap: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME || "arhantsg07";

  if (!token) {
    return NextResponse.json({ error: "Missing GITHUB_TOKEN" }, { status: 500 });
  }

  try {
    const to = new Date();
    const from = new Date();
    from.setFullYear(to.getFullYear() - 1);

    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          login: username,
          from: from.toISOString(),
          to: to.toISOString(),
        },
      }),
      next: { revalidate: 3600 },
    });

    const json = await res.json();

    if (json.errors) {
      console.error("GitHub API error:", json.errors);
      return NextResponse.json(
        { error: "Failed to fetch contributions", cells: [], total: 0 },
        { status: 200 }
      );
    }

    interface ContributionDay {
      date: string;
      contributionCount: number;
      contributionLevel: keyof typeof levelMap;
    }

    interface Week {
      contributionDays: ContributionDay[];
    }

    const weeks: Week[] =
      json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];
    const total: number =
      json?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions || 0;

    const cells = weeks.flatMap((week) =>
      week.contributionDays.map((d) => ({
        date: d.date,
        count: d.contributionCount,
        level: levelMap[d.contributionLevel] ?? 0,
      }))
    );

    return NextResponse.json({ total, cells });
  } catch (error) {
    console.error("GitHub contributions fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch contributions", cells: [], total: 0 },
      { status: 200 }
    );
  }
}
