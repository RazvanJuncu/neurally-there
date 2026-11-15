# Neurally There — v0.1

A minimal, mobile-first AI learning PWA. Content-first; no slogans, subscriptions, gamification or paid AI calls.

## What's included

- 12-module course roadmap, **five complete interactive lessons** published initially
- Quiz answers with explanations, completion scores, reflection notes and difficulty feedback
- Resource library with filters, search, external links and bookmarks
- Model Zero Lab: a real one-neuron sigmoid classifier and batch gradient descent on five labeled examples
- Learning progress dashboard, reports that can be copied into ChatGPT, JSON export and import
- Installable progressive web app; reading content and labs cached for offline use after first visit
- Optional magic-link sign-in and cross-device progress sync through **a separate Supabase project**
- Automatic local progress saving (no login required)

**Honest limitations:** the other 10 modules are on the roadmap but not yet written. In v0.1, ChatGPT does **not** automatically read your progress; use **Copy report** at the end of a lesson and paste it into the chat. The app is not hosted until you deploy it. Offline does not apply to external videos/papers or the cloud sync feature.

## Run locally (Windows)

You do **not** need npm or any dependencies.

1. Extract this ZIP.
2. In the `neurally-there-v0.1` folder, open PowerShell.
3. Run: `py -m http.server 8000` (or `python -m http.server 8000`).
4. Open `http://localhost:8000`.

Do **not** double-click `index.html` with `file://`: it uses ES modules and a service worker; serve over HTTP localhost or HTTPS instead.

## Create its own PRIVATE GitHub repository

Create a new repository in GitHub called `neurally-there` and set visibility to **Private**. Do not select "Add README" because one is supplied.

From the extracted folder, run:

```bash
git init
git branch -M main
git add .
git commit -m "Initial Neurally There v0.1"
git remote add origin https://github.com/YOUR-USERNAME/neurally-there.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username. GitHub will ask you to authenticate if needed.

## Deploy to a phone-friendly HTTPS address

Use Cloudflare Pages, Vercel, or another host for **static sites**. Import your private GitHub repository. This project requires **no npm build**: configure the output directory as the repository root `.` (or use the host's static file-upload option). Ensure all files, including the `src` and `assets` folders, are uploaded. After deployment, open the HTTPS URL in Safari on your iPhone and use **Share → Add to Home Screen**.

Avoid placing Supabase server credentials or AI API secrets in the website. It has none by default.

## Optional cross-device sync via Supabase

Create a **new** Supabase project for Neurally There (do not touch the existing Billy project). Then:

1. In your new project's SQL editor, run `supabase/schema.sql`.
2. Under Authentication, make sure email authentication is enabled and configure the site URL / additional redirect URL to match your deployed HTTPS app. Supabase may require email confirmation for first-time users.
3. In the app, open **Settings → Cloud synchronization**. Paste the new project's URL and public **publishable/anon key** (not a `service_role` or secret key).
4. Choose **Send login link**, open the email and sign in. Use the same account on mobile and desktop.
5. The app pulls remote progress, merges per-lesson updates and uploads the result. This is deliberately a simple v0.1 synchronization strategy. Do not edit the same lesson concurrently on two devices.

When no Supabase project is configured, the app still works offline with local progress saved per device. JSON export/import is available as a manual fallback. Supabase SDK is loaded dynamically from an exact pinned URL *only when cloud sync is configured*, which requires internet on first use.

Security: all rows are protected by row-level security and restricted to their owner. You should check the SQL policies and project email settings before exposing the app publicly.

## File structure

```text
index.html                 HTML entrypoint
styles.css                 Responsive layout and theme
src/content.js             Course syllabus, full lessons and resource catalog
src/app.js                 UI, quiz logic, lab math, progress and cloud adapter
manifest.webmanifest       Installable app metadata
sw.js                      Same-origin static asset offline cache
assets/                    Application icons
supabase/schema.sql        Optional Supabase RLS schema
docs/architecture.md       Implementation notes
```

## Teaching loop

After every lesson: answer all quiz questions → add a reflection and difficulty rating → finish → copy the Learning Report. The report includes missed questions and your own notes. It is suitable for pasting into ChatGPT to decide what to review next. Do not treat quiz scores as complete evidence of concept mastery.

## Updating content

Edit `src/content.js`, add lessons and resource references, and commit. If you change cached course assets for users with an installed PWA, bump the cache version at the top of `sw.js` to force a refresh. The course materials are written in Romanian, with technical English terms.