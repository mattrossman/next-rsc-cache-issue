import { headers } from "next/headers"

const DEFAULT_TIMEZONE = "America/New_York"

export default async function Home() {
  const headerList = headers()
  const headerTimezone = headerList.get("x-vercel-ip-timezone")

  if (headerTimezone == null && process.env.NODE_ENV === "production") {
    throw new Error(`Missing "x-vercel-ip-timezone" header in production`)
  }

  const timezone = headerTimezone ?? DEFAULT_TIMEZONE
  const { datetime } = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`).then((res) => res.json())

  return (
    <main className="container">
      <p>This page was rendered on</p>
      <p>
        <b>{datetime}</b>
      </p>
      <p>
        Timezone: <b>{timezone}</b>
      </p>
    </main>
  )
}
