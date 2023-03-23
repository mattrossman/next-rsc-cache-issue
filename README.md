Next.js docs say:

> By default, Next.js will cache any fetch() requests that are reachable before any dynamic functions are used and will not cache fetch requests that are discovered after dynamic functions are used.
>
> https://beta.nextjs.org/docs/api-reference/segment-config#fetchcache

In `src/app/page.tsx` I call `headers()` at the very start of my component, yet the proceeding `fetch()` call is cached.

To test this, check the page deployed on Vercel. Refreshing the page doesn't change the time fetched from https://worldtimeapi.org

If I set `{ cache: 'no-store' }` in the fetch options, then the time updates as expected.
