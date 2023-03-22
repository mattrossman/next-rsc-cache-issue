import { formatInTimeZone } from "date-fns-tz"
import { headers as nextHeaders } from "next/headers"

const DEV_TIMEZONE = "America/New_York"

export default function Home() {
  const now = Date.now()

  const headersList = nextHeaders()

  const headerTimezone = headersList.get("x-vercel-ip-timezone")
  if (headerTimezone == null && process.env.NODE_ENV === "production")
    throw new Error(`Missing "x-vercel-ip-timezone" header in production`)

  const timezone = headerTimezone ?? DEV_TIMEZONE
  const dateText = formatInTimeZone(now, timezone, "EEEE, LLLL do yyyy")
  const timeText = formatInTimeZone(now, timezone, "h:mm:ss aa")

  return (
    <main className="grid place-content-center place-items-center bg-gradient-to-br h-screen w-screen from-slate-900 to-slate-800 text-white">
      <h1 className="text-3xl font-bold mb-4">Hello!</h1>
      <p>This page was rendered on</p>
      <p>
        <b>{dateText}</b>
      </p>
      <p>
        at <b>{timeText}</b>
      </p>
    </main>
  )
}
