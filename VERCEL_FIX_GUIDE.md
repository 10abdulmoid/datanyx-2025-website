# Vercel Deployment Blank Page Fix Guide

## Issue
Same code works on another repo's Vercel deployment but shows blank page (only particles) on this repo.

## Root Causes
1. **Vercel Build Cache** - Old cached build is being served
2. **Framework Preset** - Wrong framework detection
3. **Environment Variables** - Missing or incorrect
4. **Build Settings** - Incorrect output directory or build command

---

## ✅ Solution Steps (Try in Order)

### Step 1: Clear Vercel Cache & Redeploy
Go to your Vercel dashboard:

1. Open: https://vercel.com/dashboard
2. Select your project: `datanyx-2025-website`
3. Go to **Settings** → **General**
4. Scroll to **Build & Development Settings**
5. Click **Clear Build Cache**
6. Go to **Deployments** tab
7. Click **Redeploy** on the latest deployment
8. ✅ Check "Use existing Build Cache" is **UNCHECKED**

### Step 2: Verify Framework Preset
In Vercel Settings → General:

- **Framework Preset**: Should be `Next.js`
- **Build Command**: `pnpm build` or leave empty (auto-detect)
- **Output Directory**: `.next` or leave empty (auto-detect)
- **Install Command**: `pnpm install` or leave empty (auto-detect)

### Step 3: Check Environment Variables
In Vercel Settings → Environment Variables:

Ensure no conflicting variables are set. For this project, you shouldn't need any custom env vars.

### Step 4: Force Clean Deploy via CLI
Run these commands locally:

```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Login to Vercel
vercel login

# Link to your project (if not linked)
vercel link

# Force a production deployment with no cache
vercel --prod --force
```

### Step 5: Check Node.js Version
In `package.json`, add this to ensure consistent Node version:

```json
{
  "engines": {
    "node": ">=18.0.0"
  }
}
```

Then commit and push.

### Step 6: Nuclear Option - Delete and Reconnect
If nothing works:

1. Go to Vercel Dashboard → Your Project → Settings
2. Scroll to **Danger Zone** → **Delete Project**
3. Go to GitHub and reconnect the repo
4. Vercel will auto-detect and deploy fresh

---

## 🔧 Quick Fix: Force Redeploy with Empty Commit

If you can't access Vercel dashboard right now:

```bash
# Create an empty commit to force rebuild
git commit --allow-empty -m "chore: force Vercel rebuild - clear cache"

# Push to trigger deployment
git push origin main
```

---

## 🐛 Debug: Check Browser Console

Open your deployed site and check browser console (F12):

1. Look for JavaScript errors
2. Check if React hydration errors appear
3. Check Network tab for failed resource loads
4. Look for CSP (Content Security Policy) errors

---

## 📊 Compare Working vs Non-Working Deployment

Check these differences:

| Aspect | Working Repo | This Repo |
|--------|-------------|-----------|
| Next.js Version | ? | 15.2.4 |
| Node Version | ? | ? |
| pnpm Version | ? | 10.17.1 |
| Build Command | ? | pnpm build |
| Framework Preset | Next.js | ? |

---

## ✅ What Should Appear After Fix

After successful fix, you should see:
- ✅ Navbar at top
- ✅ Hero section with Datanyx logo
- ✅ Countdown timer
- ✅ All content sections
- ✅ Particles background animation
- ✅ Custom cursor

---

## 💡 Most Likely Solution

**99% chance it's cached build.** Try:
1. Vercel Dashboard → Redeploy with cache cleared
2. Or use CLI: `vercel --prod --force`

---

Last Updated: October 20, 2025
