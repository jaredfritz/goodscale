# Goodscale Website

Official marketing website for Goodscale, a strategy and operations consultancy for foundations, nonprofits, and mission-aligned companies.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages.

## Quick Start

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── images/
│   │   ├── logo.svg            # Company logo (replace with yours)
│   │   └── jared.webp          # Headshot (add your image)
│   ├── CNAME                   # Custom domain configuration
│   ├── favicon.svg             # Site favicon (replace with yours)
│   ├── og.png                  # Open Graph image (replace with yours)
│   └── robots.txt              # Search engine crawler instructions
├── src/
│   ├── components/
│   │   ├── Button.astro        # Reusable button component
│   │   ├── Footer.astro        # Site footer with navigation
│   │   ├── LogoStripPlaceholder.astro
│   │   ├── Nav.astro           # Main navigation header
│   │   └── Section.astro       # Section wrapper component
│   ├── layouts/
│   │   └── Layout.astro        # Base page layout with SEO
│   ├── pages/
│   │   ├── index.astro         # Home page
│   │   ├── services.astro      # Services page
│   │   ├── about.astro         # About page
│   │   └── contact.astro       # Contact page
│   └── styles/
│       └── global.css          # Global styles and Tailwind config
└── astro.config.mjs            # Astro configuration

```

## Deployment to GitHub Pages

This site is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Initial Setup

1. **Enable GitHub Pages**:
   - Go to your GitHub repository settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"

2. **Configure Custom Domain (Squarespace)**:

   In your Squarespace DNS settings, add these records:

   **For www subdomain:**
   - Type: CNAME
   - Host: `www`
   - Value: `jaredfritz.github.io`
   - TTL: Auto

   **For apex domain (goodscale.org):**
   - Type: A
   - Host: `@`
   - Values (add all 4):
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - TTL: Auto

3. **Set Custom Domain in GitHub**:
   - In your repository settings, go to "Pages"
   - Under "Custom domain", enter: `goodscale.org`
   - Click "Save"
   - Enable "Enforce HTTPS" (may take a few minutes after DNS propagates)

4. **Push to Deploy**:
   ```sh
   git add .
   git commit -m "Initial site deployment"
   git push origin main
   ```

The GitHub Action will automatically build and deploy your site.

## Customization Checklist

### Before Launch

- [ ] **Logo**: Replace `/public/images/logo.svg` with your actual logo
- [ ] **Favicon**: Replace `/public/favicon.svg` with your branded favicon
- [ ] **OG Image**: Replace `/public/og.png` with a 1200x630px social media preview image
- [ ] **Headshot**: Add `/public/images/jared.webp` (headshot photo)
- [ ] **Google Form**:
  - Create a Google Form for contact
  - Get the embed code (Form → Send → Embed icon)
  - Replace the placeholder in `src/pages/contact.astro` (see comments in file)
- [ ] **Domain**: Verify `CNAME` file contains `goodscale.org`
- [ ] **LinkedIn URL**: Verify the LinkedIn links in Footer and About page are correct

### Content Updates

All website copy is already implemented per the build brief. To make changes:

- **Home page**: Edit `src/pages/index.astro`
- **Services**: Edit `src/pages/services.astro`
- **About**: Edit `src/pages/about.astro`
- **Contact**: Edit `src/pages/contact.astro`
- **Navigation**: Edit `src/components/Nav.astro`
- **Footer**: Edit `src/components/Footer.astro`

### Design Customization

The design uses CSS custom properties defined in `src/styles/global.css`:

```css
--color-ink: #0B0F14;          /* Main text color */
--color-muted: #4B5563;        /* Secondary text */
--color-surface: #F6F7F9;      /* Background surfaces */
--color-border: #E5E7EB;       /* Border color */
--color-accent: #2563EB;       /* Primary accent (from logo) */
```

Typography:
- **Headings**: Fraunces (serif)
- **Body**: Inter (sans-serif)

## Development

### Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

### Adding Pages

1. Create a new `.astro` file in `src/pages/`
2. Import and use the `Layout` component
3. Add navigation link in `src/components/Nav.astro` if needed

### Accessibility

The site includes:
- Semantic HTML structure
- Proper heading hierarchy
- Focus states on interactive elements
- ARIA labels on buttons
- Color contrast meeting WCAG AA standards
- Reduced motion support

## Tech Stack

- **[Astro](https://astro.build)** - Static site framework
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD
- **[GitHub Pages](https://pages.github.com)** - Hosting

## Support

For Astro-specific questions, see the [Astro documentation](https://docs.astro.build).

For deployment issues, check the [GitHub Pages documentation](https://docs.github.com/en/pages).
