# AGENTS.md

This file contains guidelines and commands for agentic coding agents working in this repository.

## Development Commands

### Build & Development
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Code Quality
- `npm run lint` - Run ESLint on the entire codebase
- No test framework is currently configured

### Single Test/Validation
Since no test framework is configured, validate changes manually:
1. Run `npm run dev` and verify functionality in browser
2. Check console for errors
3. Run `npm run lint` to ensure code quality
4. Test responsive design at 375px (mobile) and 1440px (desktop)

## Project Structure

This is a React + Vite project with Tailwind CSS v4 for a results summary component.

```
src/
├── main.jsx          # Application entry point
├── App.jsx           # Root component
├── dataJson.jsx      # Data fetching component
├── YourResult.jsx    # Results display component (currently empty)
├── index.css         # Global styles and Tailwind config
├── App.css           # Component-specific styles
└── assets/           # Static assets
public/
└── data.json         # API data source
```

## Code Style Guidelines

### File Naming & Structure
- Use PascalCase for React components (`App.jsx`, `DataJson.jsx`)
- Use kebab-case for CSS files when component-specific
- Keep components in separate files
- Export components as named exports or default exports consistently

### React Conventions
- Use functional components with hooks
- Import React hooks at the top: `import { useState, useEffect } from 'react'`
- Use JSX syntax and file extension `.jsx`
- Wrap application in `<StrictMode>` in entry point
- Use fragments (`<>...</>`) when wrapping multiple elements without adding extra DOM nodes

### Import Organization
1. React imports first
2. Third-party libraries
3. Local imports (use relative paths with `./` or `../`)
4. CSS imports last

```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
```

### State Management
- Use `useState` for local component state
- Use `useEffect` for side effects and data fetching
- Fetch data asynchronously with try/catch error handling
- Log errors to console: `console.error('Error message: ', error)`

### Data Fetching Pattern
```javascript
useEffect(() => {
    const loadData = async () => {
        try {
            const response = await fetch('/data.json');
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            const data = await response.json();
            setJsonData(data);
        } catch (error) {
            console.error('Error loading data:', error);
        }
    }
    loadData();
}, [])
```

### ESLint Configuration
- Uses flat config format with React plugins
- Ignores `dist/` directory
- Allows unused variables that match pattern `^[A-Z_]` (constants)
- Enforces React hooks rules and refresh patterns

### Tailwind CSS v4
- Uses Vite plugin for Tailwind integration
- Custom color palette defined in `@theme` block in `index.css`
- Custom font family: `hankenGrotest` (Hanken Grotesk variable font)
- Responsive design required for 375px (mobile) and 1440px (desktop)

### Color Scheme
- Primary colors: Light red, Orangey yellow, Green teal, Cobalt blue
- Gradients: Light slate blue to Light royal blue
- Neutral colors: White, Pale blue, Light lavender, Dark gray blue
- Use HSL/HSLA values for color consistency

### Typography
- Font: Hanken Grotesk (weights: 500, 700, 800)
- Body copy: 18px
- Text presets defined as CSS custom properties

### Error Handling
- Use try/catch blocks for async operations
- Log errors to console with descriptive messages
- Handle HTTP response errors explicitly
- Comment out unused state variables rather than deleting (for future use)

### Performance
- Use `font-display: swap` for custom fonts
- Optimize images and assets
- Use Vite's build optimizations
- Test on various screen sizes from 320px to large screens

### Browser Compatibility
- Include vendor prefixes where necessary (-webkit-, -moz-)
- Use `scroll-behavior: smooth` for better UX
- Consider `prefers-reduced-motion` for animations
- Test on modern browsers supporting ES2020+ features