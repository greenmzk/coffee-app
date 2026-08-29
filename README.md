# Brew Day

Static coffee-recipe log, ready to deploy on Cloudflare Pages. Recipes and preferences are stored locally in the visitor's browser; there is no server-side account or shared database.

## Deploy

1. Log in to Cloudflare from this project:

   ```sh
   npx wrangler login
   ```

2. Create the Pages project and upload this directory:

   ```sh
   npx wrangler pages deploy . --project-name brew-day --force
   ```

   Confirm the deployment when Wrangler asks whether to create the project. The `--force` flag keeps the current Wrangler CLI on its direct Cloudflare Pages upload path for this asset-only site. For subsequent releases, run the same command again.

## Cloudflare dashboard alternative

Create a **Workers & Pages → Pages → Upload assets** project, then upload these files together:

- `index.html`
- `brewday_seaotter.png`
- `_headers`

No build command is required. Set the build output directory to `.` if Cloudflare asks.

## Custom domain

After the first deployment, open the Pages project's **Custom domains** settings in Cloudflare and add your domain. Cloudflare will show the required DNS record if it is managed elsewhere.
