# Travel Agency Brochure Site

A static brochure site built with Next.js 14, TypeScript, and Tailwind CSS.

## Local dev
```bash
npm run dev
```

## Production build
```bash
npm run build      # emits static files in `out/`
```

## Deploy to Firebase Hosting (after `firebase init hosting`)
```bash
firebase deploy --only hosting
```

## Environment variables for contact form

Create a `.env.local` file in the repository root with the following keys:

```bash
GMAIL_USER=your-email@gmail.com          # Gmail address that will send & receive messages
GMAIL_CLIENT_ID=xxxxxxxx.apps.googleusercontent.com
GMAIL_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxx
GMAIL_REFRESH_TOKEN=1//xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

You can generate these by setting up an OAuth2 Client ID in Google Cloud console, enabling Gmail API, and using the OAuth consent screen to obtain an offline refresh token (see Google documentation for detailed steps).

**Important:** never commit `.env.local` – it is already ignored by Git.
