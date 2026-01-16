# Goodscale Website - Deployment Guide

## Pre-Launch Checklist

### 1. Add Your Assets

Before deploying, you need to add these files:

- [ ] **Logo**: Replace `/public/images/logo.svg` with your Goodscale logo
- [ ] **Favicon**: Replace `/public/favicon.svg` with your branded favicon
- [ ] **Headshot**: Add your headshot as `/public/images/jared.webp`
- [ ] **OG Image**: Create a 1200x630px social preview image at `/public/og.png`

### 2. Configure Google Form

1. Create a Google Form for contact inquiries
2. Click "Send" → Click the embed icon (<>)
3. Copy the iframe code
4. Open `src/pages/contact.astro`
5. Replace the placeholder section with your iframe code

### 3. Connect to GitHub Repository

Your repository is at: https://github.com/jaredfritz/goodscale

From the `goodscale` directory, run:

```bash
# Initialize git (if not already done)
git init

# Add the remote repository
git remote add origin https://github.com/jaredfritz/goodscale.git

# Add all files
git add .

# Create first commit
git commit -m "Initial Goodscale website"

# Push to GitHub (this will trigger deployment)
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to: https://github.com/jaredfritz/goodscale/settings/pages
2. Under "Source", select **"GitHub Actions"**
3. Under "Custom domain", enter: **goodscale.org**
4. Click "Save"
5. Check "Enforce HTTPS" (after DNS propagates)

### 5. Configure DNS in Squarespace

In your Squarespace domain settings for goodscale.org:

**Add CNAME Record (for www):**
- Type: CNAME
- Host: `www`
- Value: `jaredfritz.github.io`
- TTL: Auto

**Add A Records (for apex domain):**

Create 4 A records with Host `@` pointing to these IPs:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**Note**: DNS propagation can take 24-48 hours, but typically happens within a few hours.

## Post-Deployment

### Verify Deployment

1. Check GitHub Actions: https://github.com/jaredfritz/goodscale/actions
2. Once complete, visit: https://goodscale.org
3. Test all pages:
   - Home: https://goodscale.org
   - Services: https://goodscale.org/services
   - About: https://goodscale.org/about
   - Contact: https://goodscale.org/contact

### Test Checklist

- [ ] All pages load correctly
- [ ] Navigation works on mobile and desktop
- [ ] Contact form displays properly
- [ ] Email links work (jared@goodscale.org)
- [ ] LinkedIn links work
- [ ] Mobile responsive design looks good
- [ ] HTTPS is enabled

## Making Updates

After the initial deployment, any changes you push to the `main` branch will automatically deploy:

```bash
# Make your changes to files
# Then commit and push:
git add .
git commit -m "Description of changes"
git push origin main
```

The GitHub Action will rebuild and deploy within 2-3 minutes.

## Common Issues

### Site not showing after push
- Check GitHub Actions for build errors
- Verify GitHub Pages is enabled and set to "GitHub Actions"

### Custom domain not working
- Verify DNS records in Squarespace
- Check that CNAME file exists in `/public/CNAME`
- DNS can take 24-48 hours to propagate
- In GitHub Pages settings, try removing and re-adding the custom domain

### Build failures
- Check the Actions tab for error details
- Ensure all imports are correct
- Run `npm run build` locally to test

## Local Development

To work on the site locally:

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Visit http://localhost:4321 in your browser
```

## Support

- Astro docs: https://docs.astro.build
- GitHub Pages docs: https://docs.github.com/en/pages
- Squarespace DNS help: https://support.squarespace.com/hc/en-us/articles/360002101888

---

**Ready to launch?** Start with step 1 above and work through the checklist!
