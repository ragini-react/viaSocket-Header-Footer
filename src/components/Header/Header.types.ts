import type { ReactNode } from 'react';

export type Theme = 'light' | 'dark';

/** Strict navigation link shape per library spec. */
export interface NavLink {
  label: string;
  link: string;
}

/** Strict user-menu item shape per library spec. */
export interface UserMenuItem {
  label: string;
  onClick: () => void;
}

export interface HeaderProps {
  /** Logo image URL (rendered as an `<img>`). */
  logo: string;
  /** Primary navigation links. */
  navLinks: NavLink[];
  /**
   * Right-side actions slot. Render any node — typically buttons such as
   * "Sign in" / "Get started". Kept as a render slot for maximum flexibility.
   */
  actions?: ReactNode;
  /** Dropdown items shown under the user avatar when `isLoggedIn` is true. */
  userMenu?: UserMenuItem[];
  /** Whether the current viewer is authenticated. */
  isLoggedIn?: boolean;
  /**
   * Convenience handler. When provided and `actions` is omitted and the user
   * is not logged in, a default "Login" button is rendered.
   */
  onLogin?: () => void;
  /**
   * Convenience handler. When provided and `userMenu` is omitted and the user
   * is logged in, a default "Logout" item is rendered.
   */
  onLogout?: () => void;
  /** Visual theme. */
  theme?: Theme;
  /** Extra className appended to the outer `<header>` element. */
  className?: string;
}
