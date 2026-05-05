// Compiled Tailwind styles. Side-effect import so consumers can opt in via
// `import 'viasocket-ui/style.css'` or rely on bundlers that respect sideEffects.
import "./styles/index.css";

export { Header } from "./components/Header/Header";
export { Footer } from "./components/Footer/Footer";

export type {
  HeaderProps,
  NavLink,
  UserMenuItem,
} from "./components/Header/Header.types";

export type {
  FooterProps,
  FooterLink,
  FooterLinkGroup,
  FooterBottomLink,
  FooterBadge,
  SocialLink,
} from "./components/Footer/Footer.types";
