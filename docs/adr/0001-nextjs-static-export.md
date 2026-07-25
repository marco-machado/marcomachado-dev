# Use Next.js App Router with static export

Migrate the site from Astro to Next.js App Router to standardize on React and gain access to its broader ecosystem, while retaining a fully static deployment compatible with Cloudflare assets. Components remain Server Components by default so static content adds no browser runtime; Client Components are reserved for boundaries that require state, effects, event handlers, or browser APIs.

## Considered options

A Vite React SPA would make all rendering client-dependent and require rebuilding routing, metadata, RSS, and sitemap behavior. Keeping Astro would avoid migration cost but would not meet the React-standardization goal. Using Client Components by default was rejected because presentational TSX remains conventional React without hydration, while indiscriminate client boundaries add JavaScript without functional value.

## Consequences

The application must avoid Next.js features that require a runtime server. Blog routes, metadata, RSS, and sitemap output must all be generated at build time, and deployment must continue to serve exported static assets.
