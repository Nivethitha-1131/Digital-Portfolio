# Portfolio Project - Vercel-Ready Structure

## 📁 New Directory Structure

```
/project-root
├── /api                      # Serverless backend (Vercel Functions)
│   ├── index.ts             # Main handler
│   ├── health.ts            # Health check endpoint
│   ├── package.json
│   └── tsconfig.json
│
├── /frontend                # React + Vite frontend
│   ├── src/
│   ├── vite.config.ts
│   ├── package.json
│   ├── index.html
│   └── tsconfig.json
│
├── /lib                     # Shared libraries
├── vercel.json              # Vercel configuration
└── package.json             # Root workspace config
```

## 🚀 Deployment on Vercel

### What Changed

1. **Backend Structure**:
   - Moved from: `artifacts/api-server` 
   - To: `/api` (Vercel serverless functions)
   - Converted Express to serverless handlers

2. **Frontend Structure**:
   - Moved from: `artifacts/portfolio`
   - To: `/frontend`
   - Vite config unchanged

3. **Removed**:
   - ❌ `artifacts/api-server`
   - ❌ `artifacts/mockup-sandbox`
   - ❌ `artifacts/portfolio`

### API Endpoints

Each `.ts` file in `/api` becomes an endpoint:

- `/api/index.ts` → `GET /api`
- `/api/health.ts` → `GET /api/health`
- `/api/users.ts` → `GET|POST /api/users`

### Serverless Handler Pattern

```typescript
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    return res.status(200).json({ message: "success" });
  }
  
  res.status(405).json({ error: "Method not allowed" });
}
```

## 📝 Example: Converting Express Route to Serverless

### Before (Express):
```typescript
// artifacts/api-server/src/routes/users.ts
router.get("/users", (req, res) => {
  res.json({ users: [] });
});
```

### After (Serverless):
```typescript
// api/users.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  
  res.status(200).json({ users: [] });
}
```

## 🔧 API Calls from Frontend

### Frontend API Integration

```typescript
// frontend/src/services/api.ts
const API_URL = process.env.VITE_API_URL || "/api";

export async function fetchAPI(endpoint: string) {
  const response = await fetch(`${API_URL}${endpoint}`);
  return response.json();
}

// Usage
const data = await fetchAPI("/health");
```

### Update Frontend .env

```env
VITE_API_URL=/api
```

## 🏗️ Local Development

```bash
# Install dependencies
pnpm install

# Run frontend + API in parallel
pnpm run dev

# Frontend: http://localhost:5173
# API: http://localhost:3000 (if using local server)
```

## 🌍 Vercel Deployment

```bash
# Push to GitHub
git add .
git commit -m "Restructure project for Vercel deployment"
git push origin main

# Vercel automatically detects:
# - Frontend in /frontend (Vite)
# - API functions in /api (serverless)
```

## ✅ Checklist Before Deployment

- [ ] Frontend builds: `cd frontend && pnpm run build`
- [ ] No API directory imports (`./routes`)
- [ ] All serverless handlers export default function
- [ ] CORS headers configured in handlers
- [ ] Environment variables set in Vercel dashboard
- [ ] vercel.json configured correctly
- [ ] No `app.listen()` in API code

## 📚 Resources

- [Vercel Functions Docs](https://vercel.com/docs/functions)
- [Serverless Handler Types](https://vercel.com/docs/functions/serverless-functions/node-js)
- [Deploy with Vercel CLI](https://vercel.com/docs/cli)
