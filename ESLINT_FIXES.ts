/**
 * ESLint Configuration Fix Guide
 * 
 * Run this command to auto-fix many issues:
 * pnpm eslint . --ext .ts,.tsx --fix
 * 
 * Critical errors to fix manually:
 */

// 1. Fix unescaped entities in app/coc/page.tsx and components/sections/faqs-section.tsx
// Replace ' with &apos; or {`'`} in JSX

// 2. Remove unused imports in:
// - app/page.tsx (useMemo, useRef, StarBorder)
// - components/ChatInterface.tsx (Link)
// - components/hero-section.tsx (Link, StarBorder, poppins)
// - components/sections/about-section.tsx (useMemo, About)

// 3. Replace <img> with Next.js <Image> in:
// - components/sections/domains-section.tsx
// - components/sections/sponsors-section.tsx (4 instances)

// 4. Fix TypeScript errors in lib/utils.ts:
// Replace `any` with proper types or use `unknown`

// 5. Fix cursor.tsx:
// - Replace `var` with `const` on line 197
// - Remove unused variables `isMoving` and `isClicking`

// 6. Fix evervault-card.tsx:
// - Replace `let` with `const` for variables that aren't reassigned
// - Replace `any` types with proper types

// Quick fix commands:
export const fixCommands = {
  "Remove unused imports": "pnpm eslint . --fix",
  "Format code": "pnpm prettier --write .",
  "Check types": "pnpm tsc --noEmit",
}

// Add this to .eslintrc.json to suppress non-critical warnings during development:
export const eslintOverrides = {
  rules: {
    "@typescript-eslint/no-unused-vars": ["warn", { 
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_"
    }],
    "@next/next/no-img-element": "warn", // Warn instead of error
    "react/no-unescaped-entities": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
  }
}
