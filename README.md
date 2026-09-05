# Factora Journal

Factora Journal is a static React and Vite publication website. The repository includes an explicit Cloudflare Workers static-assets configuration, so Cloudflare does not need to modify the Vite project during deployment.

## Local development

| Command | Purpose |
| --- | --- |
| `pnpm install --frozen-lockfile` | Install the exact dependency graph |
| `pnpm dev` | Start the Vite development server |
| `pnpm check` | Run the TypeScript check |
| `pnpm build` | Build the static site into `dist/public` |
| `pnpm preview` | Build and preview through Wrangler |
| `pnpm deploy` | Build and deploy with Wrangler |

## Cloudflare deployment

The repository root contains `wrangler.jsonc`. Its assets directory is `./dist/public`, and SPA fallback is enabled for client-side routes.

For a Cloudflare Git deployment, use **`pnpm run build`** as the build command and **`pnpm exec wrangler deploy`** as the deploy command. No Vite auto-configuration step is required. If the Cloudflare project already uses `npx wrangler deploy`, the committed Wrangler configuration will still be detected.

The generated images are referenced through permanent absolute asset URLs so that the external deployment does not depend on a local `/manus-storage` proxy.
