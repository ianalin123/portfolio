# Neural Lab Portfolio - Multipage Web Application

## Overview

A multipage personal portfolio website serving as a digital lab for thought, blending neuroscience, technology, and creative storytelling. The application features a vintage-modern aesthetic with ragged layouts, serif + monospace typography pairing, and interactive neural-themed elements throughout. Built as a true multipage experience showcasing research work, creative projects, and digital journal entries.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Mix of vintage and modern visuals with ragged yet minimal layout, serif + monospace font pairing.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Theme System**: Custom dark/light mode with CSS variables

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Storage**: In-memory storage with PostgreSQL-ready schema
- **API Design**: RESTful endpoints with `/api` prefix
- **Development**: Integrated Vite dev server with HMR

### Key Components

#### UI Component System
- **shadcn/ui**: Comprehensive component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first styling with custom neural-themed color palette
- **Responsive Design**: Mobile-first approach with glassmorphism effects
- **Dark Mode**: System-aware theme switching with persistent preferences

#### Data Management
- **Database Schema**: Drizzle ORM with PostgreSQL dialect
- **Type Safety**: Full TypeScript integration with Zod validation
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **Migrations**: Database versioning with Drizzle Kit

#### Content Structure
- **Projects**: Technical research and development work
- **Journal Entries**: Personal reflections and learning notes
- **Creative Work**: Entrepreneurship and artistic endeavors
- **Dynamic Content**: Real-time neural signal visualization

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Routes**: Express server handles requests through `/api` endpoints
3. **Storage Layer**: Abstract storage interface allows switching between memory and database
4. **Type Safety**: Shared TypeScript types ensure consistency across client/server
5. **Real-time Updates**: React Query provides automatic cache invalidation and refetching

## External Dependencies

### Development Tools
- **Replit Integration**: Custom development banner and runtime error handling
- **ESBuild**: Production bundling for server-side code
- **TypeScript**: Full type checking across the entire codebase

### UI Libraries
- **Radix UI**: Headless component primitives for accessibility
- **Lucide React**: Modern icon library
- **Embla Carousel**: Touch-friendly carousel component
- **React Hook Form**: Form validation with Zod resolvers

### Database & Validation
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL provider
- **Zod**: Runtime type validation and schema generation

## Deployment Strategy

### Development
- **Local Development**: Vite dev server with Express backend
- **Hot Reload**: Full-stack HMR with Vite middleware integration
- **Type Checking**: Continuous TypeScript validation

### Production Build
1. **Frontend**: Vite builds static assets to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Asset Serving**: Express serves static files in production
4. **Environment**: NODE_ENV-based configuration switching

### Database Setup
- **Schema Management**: Drizzle migrations in `/migrations` directory
- **Environment Variables**: DATABASE_URL for connection configuration
- **Push Command**: `npm run db:push` for schema deployment

The application is designed to be easily deployable on platforms like Replit, Vercel, or traditional Node.js hosting with minimal configuration changes.