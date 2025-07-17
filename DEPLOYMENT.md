# Vercel Deployment Guide

This project has been configured for Vercel deployment with serverless functions.

## Setup

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

## Configuration

The project includes:

- `vercel.json` - Vercel configuration file
- `/api` directory - Serverless functions
- Vite build configuration for static assets

## Build Commands

For Vercel deployment, the build process will:
1. Run `npm run build` (which runs `vite build`)
2. Output static files to `dist/public`
3. Serverless functions in `/api` will be automatically deployed

## Environment Variables

If using a database, add these environment variables in Vercel dashboard:
- `DATABASE_URL` - Your database connection string
- Any other required API keys

## API Endpoints

Available serverless functions:
- `GET /api/health` - Health check
- `GET /api/users/[id]` - Get user by ID
- `POST /api/users` - Create new user

## Local Development

Continue using the existing development setup:
```bash
npm run dev
```

The Express server will continue to work for local development, while Vercel will use the serverless functions in production.