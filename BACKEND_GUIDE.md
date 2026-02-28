# Backend Development in Next.js

## Overview
Next.js is a full-stack framework - you can build both frontend and backend in the same project!

## ✅ You ARE Using React
- **React** = UI library (components, JSX, useState, useEffect)
- **TypeScript** = Programming language (adds types to JavaScript)
- **Next.js** = Framework (built on React, adds routing, SSR, API routes)

## 🎯 Three Ways to Add Backend Logic

### 1. API Routes (REST endpoints)
**Location:** `app/api/[name]/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Hello' });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Process data, save to DB
  return NextResponse.json({ success: true });
}
```

**When to use:** Traditional REST API, external services, webhooks

### 2. Server Actions
**Location:** `app/actions.ts`

```typescript
'use server';

export async function submitForm(formData: FormData) {
  const name = formData.get('name');
  // Save to database
  return { success: true };
}
```

**When to use:** Form submissions, mutations, simpler than API routes

### 3. Server Components
**Location:** Any component without `'use client'`

```typescript
// This runs on the server
export default async function Page() {
  const data = await fetch('https://api.example.com/data');
  return <div>{data.title}</div>;
}
```

**When to use:** Fetching data, accessing databases directly, SEO

## 🗄️ Database Integration Examples

### MongoDB (with Mongoose)
```bash
npm install mongoose
```

```typescript
// lib/mongodb.ts
import mongoose from 'mongoose';

export async function connectDB() {
  await mongoose.connect(process.env.MONGODB_URI!);
}
```

### PostgreSQL (with Prisma)
```bash
npm install prisma @prisma/client
npx prisma init
```

```typescript
// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();
```

### Firebase
```bash
npm install firebase-admin
```

```typescript
// lib/firebase.ts
import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
});

export const db = admin.firestore();
```

### Supabase (PostgreSQL + Auth)
```bash
npm install @supabase/supabase-js
```

```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
```

## 🔐 Environment Variables
Create `.env.local`:
```
DATABASE_URL="postgresql://..."
API_KEY="your-secret-key"
NEXT_PUBLIC_API_URL="https://api.example.com"
```

Access in code:
```typescript
const dbUrl = process.env.DATABASE_URL; // Server-side only
const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Client and server
```

## 📁 Project Structure with Backend

```
app/
├── api/                    # Backend API routes
│   ├── auth/
│   │   └── route.ts       # POST /api/auth
│   ├── projects/
│   │   ├── route.ts       # GET/POST /api/projects
│   │   └── [id]/
│   │       └── route.ts   # GET /api/projects/123
│   └── contact/
│       └── route.ts       # POST /api/contact
├── actions.ts             # Server Actions
├── page.tsx               # Frontend (React)
└── layout.tsx

lib/
├── db.ts                  # Database connection
└── utils.ts               # Helper functions

components/                # React components (Frontend)
```

## 🚀 Testing Your Backend

### API Routes:
```bash
# Using curl
curl http://localhost:3000/api/projects

# Using fetch in browser console
fetch('/api/projects').then(r => r.json()).then(console.log)
```

### Server Actions:
Use them directly in forms or call from Client Components

### Server Components:
Just load the page - data fetches automatically

## 🔄 Request Flow

```
User clicks button (Frontend - React)
        ↓
Calls /api/contact (Backend API Route)
        ↓
Validates data (TypeScript ensures types)
        ↓
Saves to database (MongoDB/PostgreSQL/etc)
        ↓
Returns response
        ↓
Updates UI (React state)
```

## ✨ Key Points

1. **Next.js = Full-Stack** - Frontend + Backend in one project
2. **React = UI** - What users see and interact with
3. **TypeScript = Language** - Type-safe JavaScript
4. **API Routes = Backend endpoints** - Like Express.js routes
5. **Server Components = Server-side rendering** - Fast, SEO-friendly
6. **No separate server needed** - Next.js handles everything

## 📚 Next Steps

1. Choose a database (MongoDB, PostgreSQL, Firebase, Supabase)
2. Install the client library
3. Create connection in `lib/db.ts`
4. Add API routes in `app/api/`
5. Use environment variables for secrets
6. Test with curl or fetch

## 🎓 Learning Path

- ✅ You have: React + TypeScript + Next.js basics
- 🔄 Next: Add database integration
- 🔜 After: Authentication (NextAuth.js)
- 🔜 Advanced: WebSockets, real-time features
