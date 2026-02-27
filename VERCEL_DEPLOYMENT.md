# 🚀 Vercel Deployment Guide

## Prerequisites

- GitHub repository: https://github.com/1Sakib1/Smart-Rubbish-Detection
- Vercel account (free tier works)
- Supabase project with the backend deployed

## Step-by-Step Deployment

### 1. Delete the Old Vercel Project (if exists)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Find your old "smart-rubbish-detection" project
3. Click on the project → Settings → Delete Project
4. Confirm deletion

### 2. Create a New Vercel Project

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository:
   - Select **"Import Git Repository"**
   - Find: `1Sakib1/Smart-Rubbish-Detection`
   - Click **"Import"**

### 3. Configure Build Settings

Vercel should auto-detect these settings (verify them):

- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 4. Add Environment Variables

⚠️ **CRITICAL**: Add these environment variables in Vercel:

1. Click **"Environment Variables"**
2. Add each of these:

```
VITE_SUPABASE_URL = your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY = your-anon-key
```

**Where to find these values:**
- Go to your [Supabase Dashboard](https://supabase.com/dashboard)
- Select your project
- Go to **Settings** → **API**
- Copy:
  - **Project URL** → `VITE_SUPABASE_URL`
  - **anon/public key** → `VITE_SUPABASE_ANON_KEY`

### 5. Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (2-3 minutes)
3. Once done, you'll get a URL like: `https://smart-rubbish-detection.vercel.app`

## 🔧 Post-Deployment Checks

### Test Your Deployment

1. ✅ **Landing Page** loads correctly
2. ✅ **Login/Signup** works
3. ✅ **Report Rubbish** form and map load
4. ✅ **Dashboard** displays data from cloud
5. ✅ **Admin Dashboard** (login as admin1@sydney.gov.au)

### Common Issues & Fixes

#### ❌ Blank Page / 404 Error

**Solution**: Check the browser console (F12):
- If you see CORS errors → Supabase backend not deployed
- If you see "Failed to load module" → Environment variables missing
- If you see router errors → Clear cache and hard reload (Ctrl+Shift+R)

#### ❌ "Cannot read properties of undefined"

**Solution**: Missing environment variables
1. Go to Vercel → Your Project → Settings → Environment Variables
2. Verify `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set
3. Redeploy: Deployments → Latest → "Redeploy"

#### ❌ Login/Signup Not Working

**Solution**: Supabase backend not responding
1. Check your Supabase Edge Functions are deployed
2. Verify the server is running at: `https://your-project-id.supabase.co/functions/v1/make-server-3e3b490b/health`
3. Check Edge Function logs in Supabase Dashboard

#### ❌ Map Not Loading

**Solution**: Leaflet CSS not loaded
- This should be automatic, but if issues persist:
- Open browser console and check for CSS errors
- Try clearing browser cache

## 🔄 Continuous Deployment

Once set up, Vercel will automatically deploy when you push to GitHub:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

Vercel will:
1. Detect the push
2. Build your project
3. Deploy automatically
4. Send you a notification

## 📊 Monitoring

### View Deployment Logs

1. Go to Vercel Dashboard → Your Project
2. Click **"Deployments"**
3. Click on a deployment to see logs

### View Runtime Logs

1. Go to Vercel Dashboard → Your Project
2. Click **"Logs"**
3. Filter by time period

## 🌐 Custom Domain (Optional)

1. Go to Vercel → Your Project → Settings → Domains
2. Add your custom domain (e.g., `rubbishdetection.com.au`)
3. Follow Vercel's DNS configuration instructions
4. SSL certificate is automatically provisioned

## 📝 Important Notes

- ✅ Vercel automatically uses `base: "/"` (configured in vite.config.ts)
- ✅ All routes work with SPA rewrites (configured in vercel.json)
- ✅ Environment variables are injected at build time
- ⚠️ Never commit `.env` files to GitHub
- ⚠️ Service role keys should ONLY be in Supabase, never in frontend

## 🆘 Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- Check deployment logs for specific error messages
