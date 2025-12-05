# Deployment Guide

## Option 1: Deploy to Vercel (Recommended)

### Step 1: Prepare Your Code
```bash
# Make sure everything works locally
npm run build

# Test the production build
npm run preview
```

### Step 2: Push to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/omarJ10/portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your `portfolio` repository
5. Vercel will auto-detect settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"
7. Your site will be live at `your-portfolio.vercel.app`

### Step 4: Add Custom Domain (Optional)
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS settings as instructed

---

## Option 2: Deploy to Netlify

### Quick Deploy
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build your project
npm run build

# Deploy
netlify deploy --prod
```

### Or via Netlify Dashboard
1. Go to https://netlify.com
2. Sign up/Login
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub and select repository
5. Settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

---

## Option 3: Deploy to GitHub Pages

I've added a GitHub Actions workflow for automatic deployment.

### Setup:
```bash
# Push to GitHub (see Option 1, Step 2)

# Enable GitHub Pages
1. Go to repository Settings
2. Navigate to "Pages"
3. Source: GitHub Actions
4. Your site will be at: https://omarJ10.github.io/portfolio/
```

The workflow will automatically build and deploy on every push to main branch.

---

## Option 4: Deploy to Render

1. Go to https://render.com
2. Sign up/Login with GitHub
3. Click "New" → "Static Site"
4. Connect your repository
5. Settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
6. Deploy!

---

## 🔧 Environment Variables (if needed later)

If you add any API keys or sensitive data later:

**Vercel/Netlify:**
- Add in dashboard under "Environment Variables"
- Prefix with `VITE_` to expose to Vite (e.g., `VITE_API_KEY`)

**GitHub Pages:**
- Add as GitHub Secrets in repository settings

---

## ✅ Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify all external links work (GitHub, LinkedIn)
- [ ] Check mobile responsiveness
- [ ] Test contact information links
- [ ] Update LinkedIn with portfolio link
- [ ] Update GitHub bio with portfolio link
- [ ] Share on social media!

---

## 🐛 Troubleshooting

### Build fails
- Check `package.json` for correct scripts
- Ensure all dependencies are in `dependencies`, not `devDependencies`
- Try: `rm -rf node_modules package-lock.json && npm install`

### Blank page after deployment
- Check browser console for errors
- Verify build command creates `dist` folder
- Check if deployment is pointing to correct directory

### 404 on page refresh
- For SPAs, you may need to configure redirects
- Add `_redirects` file to `public` folder:
  ```
  /*    /index.html   200
  ```

---

**Need help with deployment? Let me know which platform you'd like to use!**
