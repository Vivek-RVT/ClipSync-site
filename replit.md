# ClipSync - Free Clipboard Manager

## Overview

ClipSync is a 100% free and open source clipboard manager created by Vivek Rawat (RVT) that provides secure, local clipboard management with password encryption. Available for Windows and Linux platforms only. The project website is built as a modern full-stack web application using React for the frontend, Express.js for the backend, showcasing the desktop application and providing download links. The application emphasizes offline-first approach, local storage, and user privacy.

## Recent Changes (August 14, 2025)

### Major Update: Removed Pricing, Made App Free
- **Removed all pricing tiers**: App is now 100% free with no subscriptions or paid plans
- **Updated download links**: Added real Google Drive download links for Windows (.exe) and Linux (.deb)
- **Added installation instructions**: Detailed Linux installation via dpkg and Windows setup guide
- **Updated navigation**: Removed "Pricing" from navbar and footer, replaced with "Download"
- **Added uninstall instructions**: Linux uninstall command included
- **Creator attribution**: Added Vivek Rawat (RVT) as creator throughout the site
- **Platform limitation**: Clarified that app is only available for Windows and Linux (no macOS)

### Download Links Added
- Linux (.deb): https://drive.google.com/file/d/1RTgAfIL8G-HhNpVVwLo_-u9pJy9C9AXv/view
- Windows: https://drive.google.com/file/d/1XMqhRZPbnYYs898RalbmoWVJNS7bc7sw/view?usp=sharing

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing with pages for Home, Features, Download, Security, Pricing, Docs, and Contact
- **UI Components**: Shadcn/ui component library built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Theme System**: Custom theme provider with dark/light mode support and localStorage persistence
- **Design System**: Premium, minimal design with glass morphism effects, generous spacing, and responsive mobile-first layout

### Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API server
- **Development Server**: Vite middleware integration for seamless full-stack development experience
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development and PostgreSQL for production
- **Error Handling**: Centralized error handling with structured error responses

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: User management schema with support for username/password authentication
- **Migration System**: Drizzle Kit for database schema migrations and management
- **Connection**: Neon Database serverless PostgreSQL for cloud deployment

### Styling and Design
- **CSS Framework**: Tailwind CSS with custom design tokens and CSS variables
- **Component Variants**: Class Variance Authority (CVA) for component styling patterns
- **Typography**: Inter font family for consistent, modern typography
- **Color System**: Custom color palette with support for light/dark themes
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive utilities

### Development Tooling
- **Build System**: Vite with optimized production builds and hot module replacement
- **Type Safety**: TypeScript throughout the entire application stack
- **Code Quality**: ESLint and TypeScript compiler for code validation
- **Path Mapping**: Absolute imports with @ aliases for clean import statements

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod validation
- **Backend Framework**: Express.js with TypeScript support
- **Build Tools**: Vite with React plugin and TypeScript compilation

### Database and ORM
- **Database**: PostgreSQL via Neon Database serverless platform
- **ORM**: Drizzle ORM with Drizzle Kit for migrations and schema management
- **Validation**: Drizzle-Zod integration for type-safe schema validation

### UI and Styling
- **Component Library**: Radix UI primitives for accessible, unstyled components
- **CSS Framework**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Inter) loaded via CDN with preconnect optimization

### Utility Libraries
- **State Management**: TanStack React Query for server state and caching
- **Date Handling**: date-fns for date manipulation and formatting
- **Styling Utilities**: clsx and tailwind-merge for conditional styling
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Development and Deployment
- **Runtime**: Node.js 18+ with ESM module support
- **Package Manager**: npm for dependency management
- **Development Tools**: tsx for TypeScript execution, esbuild for server bundling
- **Replit Integration**: Replit-specific plugins for development environment integration