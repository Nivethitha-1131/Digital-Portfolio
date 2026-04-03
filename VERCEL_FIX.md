# ⚠️ VERCEL DEPLOYMENT FIX - CRITICAL

## The Problem

Your Vercel project is set to:
- **Root Directory:** `frontend` ❌ (WRONG for monorepo)
- **Build Command:** `pnpm install && pnpm -C frontend run build`

This creates: `/vercel/path0/frontend/frontend` (double nesting!)

---

## The Solution

### Step 1: Update Vercel Dashboard Settings

Go to your Vercel project → Settings → General

**CHANGE:**
- Root Directory: FROM `frontend` → TO `.` (dot/current directory)

**KEEP:**
- Build Command: (leave empty - uses vercel.json)
- Output Directory: (leave empty - uses vercel.json)
- Framework: React

### Step 2: Verify vercel.json

```json
{
  "version": 2,
  "buildCommand": "pnpm install && pnpm -C frontend run build",
  "outputDirectory": "frontend/dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## How It Works

**With Root Directory = `.` (monorepo root):**

```
Vercel starts at: /path0/ (monorepo root)
  ↓
Build: pnpm install && pnpm -C frontend run build
  ↓
Runs: cd /path0/frontend && vite build
  ↓
Creates: /path0/frontend/dist
  ↓
Output: frontend/dist ✓ Found!
```

---

## ✅ Final Steps

1. **In Vercel Dashboard:**
   - Navigate to Settings → General
   - Change Root Directory to: `.`
   - Save

2. **Trigger Redeploy:**
   - Click "Redeploy" button
   - Or push new commit to GitHub

3. **Result:**
   - Build will succeed
   - Portfolio will deploy live ✓

---

## Debug Info

If still fails, collect:
- `pnpm -v` (version)
- `node -v` (version)
- Build logs from Vercel dashboard
