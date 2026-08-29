# Brew Day

Static coffee-recipe log, ready to deploy as a Cloudflare Worker with static assets. Recipes and preferences are stored locally in the visitor's browser; there is no server-side account or shared database.

## Deploy

1. Log in to Cloudflare from this project:

   ```sh
   npx wrangler login
   ```

2. Deploy the static-assets Worker:

   ```sh
   npx wrangler deploy
   ```

   For subsequent releases, run the same command again.

## Cloudflare Workers Git deployment

When connecting this repository in Cloudflare, create a project from the **Workers** tab and use:

- Build command: leave blank
- Deploy command: `npx wrangler deploy`
- Root directory: `.`

`wrangler.toml` configures Workers Static Assets and `not_found_handling = "single-page-application"`, so the app needs no Worker entry point, build step, or framework.

Only the browser-facing app files are uploaded; `.assetsignore` prevents source-control and configuration files from being exposed as static assets.

## Custom domain

After the first deployment, open the Worker's **Settings → Domains & Routes** section in Cloudflare and add your domain. Cloudflare will show the required DNS record if it is managed elsewhere.
