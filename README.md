# Next.js 14 Boilerplate

This is a boilerplate project using Next.js 14, Ant Design, Redux Toolkit, and RTK Query.

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features

- Next.js 14 with App Router
- Ant Design for UI components
- Redux Toolkit for state management
- RTK Query for API calls
- TypeScript support
- ESLint for code linting

## Project Structure

- `src/app`: Next.js app router pages and API routes
- `src/components`: React components
- `src/lib`: Utility functions and configurations
- `public`: Static assets

## Migrating from React to Next.js

If you're migrating an existing React project to Next.js, follow these steps:

1. Set up a new Next.js project using this boilerplate.

2. Move your existing React components to the `src/components` directory.

3. Create pages for your routes in the `src/app` directory:

- Use the `page.tsx` file naming convention for each route.
- Example: `src/app/about/page.tsx` for the `/about` route.

4. Convert your React Router routes to Next.js pages and layouts:

- Use `src/app/layout.tsx` for the main layout.
- Create nested layouts using `layout.tsx` files in subdirectories.

5. Update imports:

- Replace `import React from 'react'` with `'use client'` at the top of client-side components.
- Update import paths to use the `@/` alias for imports from the `src` directory.

6. Convert any class components to functional components using hooks.

7. Replace React Router's `useNavigate` and `Link` components with Next.js `useRouter` and `Link`:

```typescript
// React Router
import { useNavigate, Link } from "react-router-dom";

// Next.js
import { useRouter } from "next/navigation";
import Link from "next/link";
```

8. Update client-side routing:

```typescript
// React Router
const navigate = useNavigate();
navigate("/about");

// Next.js
const router = useRouter();
router.push("/about");
```

9. Move API calls to API routes in the `src/app/api` directory or use RTK Query for data fetching.

10. Update your package.json scripts to use Next.js commands

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

11. Update your CSS imports:

- Use CSS Modules by creating `.module.css` files
- Import them in your components:

```typescript
import styles from "./YourComponent.module.css";
```

12. Update your Redux setup:

- Use the provided `store.ts` and `Providers.tsx` as examples.
- Wrap your app with the Redux provider in `src/app/layout.tsx`.

13. Implement API routes:

- Create API routes in `src/app/api` directory.
- Use the provided RTK Query setup in `src/lib/api.ts` as an example.

14. Update your build and deployment process to accommodate Next.js:

- Use `next build` to build your application.
- Deploy to a platform that supports Next.js, like Vercel or Netlify.

15. Test your application thoroughly and address any remaining issues.

## Customization

- Update `src/lib/api.ts` to add your own API endpoints
- Modify `src/components/HomePage.tsx` to change the main page content
- Add new components in the `src/components` directory
- Create new pages in the `src/app` directory

## Learn More

To learn more about the technologies used in this boilerplate, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Ant Design Documentation](https://ant.design/docs/react/introduce)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [RTK Query Documentation](https://redux-toolkit.js.org/rtk-query/overview)
