# viasocket-ui

A small, production-ready React + TypeScript component library providing a
reusable **Header** and **Footer** system that any viaSocket product can drop
in and configure entirely via props.

- React 18 + TypeScript + Vite (library mode)
- Tailwind CSS (compiled and shipped as `dist/style.css`)
- Zero runtime dependencies beyond `react` / `react-dom` (peer-deps)
- Router-agnostic — pass hrefs or `onClick` handlers
- Light / dark theming, mobile hamburger menu, user dropdown, a11y basics

---

## Install

```bash
npm install @ragini-mahobiya/viasocket-ui
# or
pnpm add @ragini-mahobiya/viasocket-ui
```

`react` and `react-dom` are **peer dependencies** — you already have them.

---

## Setup in a consuming app

Import the precompiled stylesheet **once** (e.g. in `main.tsx` or `_app.tsx`):

```ts
import '@ragini-mahobiya/viasocket-ui/style.css';
```

That's it. No Tailwind setup needed in the host app. If your host app **also**
uses Tailwind, the library styles coexist safely (scoped utility classes).

---

## Usage

```tsx
import { Header, Footer } from '@ragini-mahobiya/viasocket-ui';
import '@ragini-mahobiya/viasocket-ui/style.css';

export default function App() {
  return (
    <>
      <Header
        logo="https://cdn.example.com/logo.svg"
        navLinks={[
          { label: 'Products', link: '/products' },
          { label: 'Pricing', link: '/pricing' },
          { label: 'Docs', link: 'https://docs.example.com' },
        ]}
        onLogin={() => console.log('login')}
        isLoggedIn={false}
        theme="light"
      />

      {/* ... your app ... */}

      <Footer
        logo="viaSocket"
        linkGroups={[
          {
            title: 'Product',
            links: [
              { label: 'Features', link: '/features' },
              { label: 'Pricing', link: '/pricing' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About', link: '/about' },
              { label: 'Careers', link: '/careers' },
            ],
          },
        ]}
        socialLinks={[
          { label: 'GitHub', type: 'github', link: 'https://github.com' },
          { label: 'Twitter', type: 'twitter', link: 'https://twitter.com' },
        ]}
        bottomLinks={[
          { label: 'Privacy', link: '/privacy' },
          { label: 'Terms', link: '/terms' },
        ]}
        legalLine="All rights reserved."
      />
    </>
  );
}
```

### Logged-in state + user menu

```tsx
<Header
  logo="viaSocket"
  navLinks={[{ label: 'Home', link: '/' }]}
  isLoggedIn
  userMenu={[
    { label: 'Dashboard', onClick: () => navigate('/dashboard') },
    { label: 'Settings', onClick: () => navigate('/settings') },
    { label: 'Logout', onClick: logout },
  ]}
/>
```

### With a client-side router

`navLinks` render as plain anchors. If you need SPA navigation, just wire the
browsing logic into `actions` or `userMenu` handlers — the library does not
depend on any router.

### Dark mode

Either pass `theme="dark"` directly on the component, or toggle the `dark`
class on a parent element — both work.

---

## API

### `<Header />`

```ts
type HeaderProps = {
  logo: string;                                // image URL, rendered as <img>
  navLinks: { label: string; link: string }[];
  actions?: ReactNode;
  userMenu?: { label: string; onClick: () => void }[];
  isLoggedIn?: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
  theme?: 'light' | 'dark';
  className?: string;
};
```

| Prop         | Type                                              | Description                                                     |
| ------------ | ------------------------------------------------- | --------------------------------------------------------------- |
| `logo`       | `string`                                          | Image URL; rendered as `<img>`.                                 |
| `navLinks`   | `{ label; link }[]`                               | Desktop + mobile nav links.                                     |
| `actions`    | `ReactNode`                                       | Right-side slot (Login / Sign up etc.). Render any JSX.         |
| `userMenu`   | `{ label; onClick }[]`                            | Dropdown items when `isLoggedIn`.                               |
| `isLoggedIn` | `boolean`                                         | Shows user menu when `true`.                                    |
| `onLogin`    | `() => void`                                      | Convenience: renders a default Login button if `actions` unset. |
| `onLogout`   | `() => void`                                      | Convenience: adds a default Logout entry if `userMenu` unset.   |
| `theme`      | `'light' \| 'dark'`                               | Visual theme.                                                   |
| `className`  | `string`                                          | Extra classes on the `<header>` element.                        |

### `<Footer />`

```ts
type FooterProps = {
  logo: string | ReactNode;                    // string text/URL or any node
  linkGroups: FooterLinkGroup[];
  socialLinks?: SocialLink[];
  badges?: FooterBadge[];
  copyright?: string | ReactNode;
  legalLine?: string | ReactNode;
  bottomLinks?: FooterBottomLink[];
  theme?: 'light' | 'dark';
  className?: string;
};
```

| Prop          | Type                          | Description                                     |
| ------------- | ----------------------------- | ----------------------------------------------- |
| `logo`        | `string \| ReactNode`         | Text, image URL, or custom node.                |
| `linkGroups`  | `FooterLinkGroup[]`           | Grouped link columns (split across 3 sub-cols). |
| `socialLinks` | `SocialLink[]`                | Social icons (built-in set available).          |
| `badges`      | `FooterBadge[]`               | Trust badges rendered above the social icons.   |
| `copyright`   | `string \| ReactNode`         | Defaults to `© <year> <brand>`.                 |
| `legalLine`   | `string \| ReactNode`         | Optional second copyright line.                 |
| `bottomLinks` | `FooterBottomLink[]`          | Small links in the bottom bar.                  |
| `theme`       | `'light' \| 'dark'`           | Visual theme.                                   |
| `className`   | `string`                      | Extra classes on the `<footer>`.                |

Built-in social `type`s: `twitter`, `github`, `linkedin`, `facebook`,
`instagram`, `youtube`. Pass a custom `icon: ReactNode` for anything else.

---

## Develop

```bash
npm install
npm run dev       # playground at http://localhost:5173
npm run build     # outputs dist/ (JS, CJS, d.ts, style.css)
```

## Publish

```bash
npm run build
npm publish --access public   # scoped package requires --access public
```

## License

MIT
