# Yash Bawane — Portfolio

A production-ready personal portfolio built with Next.js 15 (App Router), React 19,
TypeScript, and Tailwind CSS. 3D hero built with React Three Fiber, motion handled
by Framer Motion and GSAP, smooth scroll via Lenis.

## Tech stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript.
- **Styling:** Tailwind CSS (CSS variables for dark/light theming)
- **Animation:** Framer Motion, GSAP, Lenis
- **3D:** React Three Fiber / Three.js
- **Icons:** Lucide React
- **Theme persistence:** next-themes (localStorage-backed)
- **Typography:** Sora (display), Plus Jakarta Sans (body), JetBrains Mono (code)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/                     Routes (App Router)
  page.tsx               Home — assembles all sections
  about/page.tsx          /about
  projects/page.tsx       /projects (full grid)
  project/[slug]/page.tsx /project/[slug] (case study, statically generated)
  contact/page.tsx        /contact
  layout.tsx              Root layout — providers, nav, footer, ambient layers

components/
  Hero/                  Hero.tsx + HeroScene.tsx (R3F, client-only via next/dynamic)
  Navbar/ About/ Projects/ Skills/ Experience/ Services/
  Testimonials/ GitHubStats/ Contact/ Footer/
  ThemeToggle/ Loader/ Cursor/ Background/
  ui/                    Small reusable primitives (Button, Card, Badge, SectionHeading)
  providers/             ThemeProvider (next-themes), SmoothScrollProvider (Lenis)

constants/               All content — edit these, not the components
  config.ts              Name, role, bio, education, contact info
  projects.ts             Project data + getProjectBySlug()
  skills.ts experience.ts services.ts certificates.ts testimonials.ts socials.ts navigation.ts

hooks/                   useLenis, useMousePosition, useScrollProgress, useTypedText
lib/utils.ts             cn() class-merging helper
styles/globals.css       Tailwind directives + CSS custom properties for both themes
```

## Editing content

Everything text-based lives in `constants/`. Nothing is hardcoded in components.
To update a project, add a skill, or change contact info, edit the relevant file
in `constants/` — every page that uses it updates automatically.

Known placeholders to replace before shipping:
- `constants/experience.ts` — real work history
- `constants/certificates.ts` — actual certificate titles/years
- `constants/testimonials.ts` — real quotes
- `components/GitHubStats/GitHubStats.tsx` — currently static placeholder numbers;
  wire up to the GitHub REST/GraphQL API for live data
- `constants/config.ts` — real email, and add your resume PDF to `public/resume/`
- `constants/socials.ts` and project `githubUrl`/`liveUrl` fields — real links
- `components/Contact/Contact.tsx` — the form currently only sets local state;
  wire the `handleSubmit` function to an API route or a service like Resend/Formspree

## Theming

Dark and light themes are defined as CSS custom properties in `styles/globals.css`
(`:root` for dark, `.light` for light) and toggled by `next-themes`, which also
persists the choice to `localStorage` automatically.

## Deployment

Ready to deploy on Vercel with zero configuration:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

Then import the repo at [vercel.com/new](https://vercel.com/new).

---

_Last updated: August 2026_
