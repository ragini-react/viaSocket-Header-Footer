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
npm install viasocket-ui
# or
pnpm add viasocket-ui
```

`react` and `react-dom` are **peer dependencies** — you already have them.

---

## Setup in a consuming app

Import the precompiled stylesheet **once** (e.g. in `main.tsx` or `_app.tsx`):

```ts
import 'viasocket-ui/style.css';
```

That's it. No Tailwind setup needed in the host app. If your host app **also**
uses Tailwind, the library styles coexist safely (scoped utility classes).

---

## Usage

```tsx
import { Header, Footer } from 'viasocket-ui';
import 'viasocket-ui/style.css';

export default function App() {
  return (
    <>
      <Header
        logo="viaSocket"
        navLinks={[
          { label: 'Products', link: '/products' },
          { label: 'Pricing', link: '/pricing' },
          { label: 'Docs', link: 'https://docs.example.com' },
        ]}
        actions={
          <>
            <button onClick={signIn} className="...">Sign in</button>
            <a href="/signup" className="...">Get started</a>
          </>
        }
        isLoggedIn={false}
        theme="light"
      />

      {/* ... your app ... */}

      <Footer
        company={{
          logo: 'viaSocket',
          tagline: 'Automate anything in minutes.',
          description:
            'viaSocket helps teams integrate, automate, and scale workflows.',
        }}
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
  logo: string | ReactNode;
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
| `logo`       | `string \| ReactNode`                             | Image URL, text, or custom node.                                |
| `navLinks`   | `{ label; link }[]`                               | Desktop + mobile nav links.                                     |
| `actions`    | `ReactNode`                                       | Right-side slot (Login / Sign up etc.). Render any JSX.         |
| `userMenu`   | `{ label; onClick }[]`                            | Dropdown items when `isLoggedIn`.                               |
| `isLoggedIn` | `boolean`                                         | Shows user menu when `true`.                                    |
| `onLogin`    | `() => void`                                      | Convenience: renders a default Login button if `actions` unset. |
| `onLogout`   | `() => void`                                      | Convenience: adds a default Logout entry if `userMenu` unset.   |
| `theme`      | `'light' \| 'dark'`                               | Visual theme.                                                   |
| `className`  | `string`                                          | Extra classes on the `<header>` element.                        |

### `<Footer />`

| Prop          | Type                          | Description                            |
| ------------- | ----------------------------- | -------------------------------------- |
| `company`     | `FooterCompany`               | Logo + tagline + description.          |
| `linkGroups`  | `FooterLinkGroup[]`           | Arbitrary grouped link columns.        |
| `socialLinks` | `SocialLink[]`                | Social icons (built-in set available). |
| `copyright`   | `string \| ReactNode`         | Defaults to `© <year> <brand>`.        |
| `bottomLinks` | `FooterBottomLink[]`          | Small links in the bottom bar.         |
| `theme`       | `'light' \| 'dark'`           | Visual theme.                          |
| `className`   | `string`                      | Extra classes on the `<footer>`.       |

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
npm publish --access public
```

## License

MIT
