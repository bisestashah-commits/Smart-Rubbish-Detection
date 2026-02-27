# 🚀 Push to GitHub - Step-by-Step Guide

## Prerequisites
- Git installed on your computer
- GitHub account
- Repository created at: https://github.com/1Sakib1/Smart-Rubbish-Detection

---

## 📋 Step-by-Step Instructions

### Step 1: Open Terminal/Command Prompt

Navigate to your project directory:
```bash
cd /path/to/your/project
```

### Step 2: Initialize Git (if not already initialized)

```bash
git init
```

### Step 3: Add Remote Repository

```bash
git remote add origin https://github.com/1Sakib1/Smart-Rubbish-Detection.git
```

**Verify the remote:**
```bash
git remote -v
```

You should see:
```
origin  https://github.com/1Sakib1/Smart-Rubbish-Detection.git (fetch)
origin  https://github.com/1Sakib1/Smart-Rubbish-Detection.git (push)
```

### Step 4: Add All Files to Staging

```bash
git add .
```

This adds all files except those in `.gitignore`.

### Step 5: Create Initial Commit

```bash
git commit -m "Initial commit: Smart Rubbish Detection System with cloud storage"
```

### Step 6: Set Main Branch

```bash
git branch -M main
```

### Step 7: Push to GitHub

```bash
git push -u origin main
```

**If the remote repository already has content**, you may need to force push (use with caution):
```bash
git push -u origin main --force
```

---

## 🎯 Enable GitHub Pages

After pushing, enable GitHub Pages:

1. Go to your repository: https://github.com/1Sakib1/Smart-Rubbish-Detection
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
5. Save the changes

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your React app
- Deploy to GitHub Pages
- Your site will be live at: https://1sakib1.github.io/Smart-Rubbish-Detection

---

## 🔄 Future Updates

After making changes to your code:

```bash
# 1. Check status
git status

# 2. Add changed files
git add .

# 3. Commit with a descriptive message
git commit -m "Description of your changes"

# 4. Push to GitHub
git push origin main
```

The GitHub Actions workflow will automatically rebuild and deploy your changes.

---

## 🔑 Authentication

If prompted for credentials, you have two options:

### Option 1: HTTPS with Personal Access Token (Recommended)
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` permissions
3. Use the token as your password when prompted

### Option 2: SSH (More Secure)
1. Generate SSH key: `ssh-keygen -t ed25519 -C "your_email@example.com"`
2. Add to SSH agent: `ssh-add ~/.ssh/id_ed25519`
3. Add public key to GitHub: Settings → SSH and GPG keys
4. Change remote URL:
   ```bash
   git remote set-url origin git@github.com:1Sakib1/Smart-Rubbish-Detection.git
   ```

---

## ⚠️ Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/1Sakib1/Smart-Rubbish-Detection.git
```

### Error: "failed to push some refs"
```bash
# Pull first, then push
git pull origin main --rebase
git push origin main
```

### Error: "Permission denied"
- Make sure you're logged into the correct GitHub account
- Check if you have write access to the repository
- Use a Personal Access Token instead of password

---

## ✅ Verify Deployment

1. **Check GitHub Actions:**
   - Go to your repository
   - Click on **Actions** tab
   - You should see a workflow running/completed

2. **Visit Your Site:**
   - Wait 2-3 minutes after the workflow completes
   - Visit: https://1sakib1.github.io/Smart-Rubbish-Detection

3. **Test the Application:**
   - ✅ Landing page loads correctly
   - ✅ Login/Register works
   - ✅ Report submission works
   - ✅ Admin dashboard accessible
   - ✅ Eco points update in real-time

---

## 📝 Important Files

Make sure these files are in your repository:
- ✅ `.github/workflows/deploy.yml` - Automatic deployment
- ✅ `vite.config.ts` - Base URL configured
- ✅ `.gitignore` - Excludes node_modules
- ✅ `README.md` - Project documentation
- ✅ `package.json` - Dependencies and scripts

---

## 🎉 Success!

Your Smart Rubbish Detection System is now live on GitHub! 

**Next Steps:**
1. Test all features on the live site
2. Share the link with your team
3. Configure Supabase credentials in production
4. Update documentation as needed

---

**Need Help?** Contact Nazmus Sakib at s8116515@live.vu.edu.au
