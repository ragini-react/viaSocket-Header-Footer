import { useEffect, useRef, useState, type FC } from 'react';
import { cn } from '../../utils/cn';
import type { HeaderProps, UserMenuItem } from './Header.types';

/* ---------- Inline icons (replaces lucide-react) ---------- */

const MenuIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const CloseIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ChevronDownIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/* ---------- User menu (logged-in dropdown) ---------- */

interface UserMenuProps {
  items: UserMenuItem[];
}

const UserMenu: FC<UserMenuProps> = ({ items }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="relative mx-4 lg:mr-0" ref={ref}>
      <button
        type="button"
        className="flex items-center justify-center text-white px-4 bg-accent !text-xs text-nowrap hover:bg-black !h-[32px] !font-normal rounded-full gap-2"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Open account menu"
        onClick={() => setOpen((v) => !v)}
      >
        Account
        <ChevronDownIcon className="w-4 h-4" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-[120] mt-2 w-48 origin-top-right rounded-md border border-gray-200 bg-white py-1 shadow-lg"
        >
          {items.map((item, idx) => (
            <button
              key={idx}
              type="button"
              role="menuitem"
              className="block w-full px-4 py-2 text-left !text-xs uppercase text-dark hover:text-accent"
              onClick={() => {
                item.onClick();
                setOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/* ---------- Header ---------- */

export const Header: FC<HeaderProps> = ({
  logo,
  navLinks,
  actions,
  userMenu,
  isLoggedIn = false,
  onLogin,
  onLogout,
  theme = 'light',
  className,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Resolve user menu fallback (onLogout convenience).
  const resolvedUserMenu: UserMenuItem[] | undefined =
    userMenu && userMenu.length
      ? userMenu
      : onLogout
        ? [{ label: 'Logout', onClick: onLogout }]
        : undefined;

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <header
        role="banner"
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 max-h-none overflow-visible translate-y-0 opacity-100 pointer-events-auto',
          className
        )}
      >
        {/* Top navigation bar — visible only when `actions` slot is provided */}
        {actions ? (
          <div className="border-gray-300 border-b lg:block hidden bg-gray-200/80 supports-[backdrop-filter]:bg-gray-200/70 supports-[-webkit-backdrop-filter:blur(0)]:bg-gray-200/70 backdrop-blur-xl [-webkit-backdrop-filter:blur(24px)]">
            <div className="items-center justify-end flex !h-[30px]">
              {actions}
            </div>
          </div>
        ) : null}

        {/* Main navigation bar */}
        <div className="border-b border-gray-300 transition-all duration-300 ease-in-out overflow-hidden h-[48px] bg-[#faf9f6]/80 supports-[backdrop-filter]:bg-[#faf9f6]/60 supports-[-webkit-backdrop-filter:blur(0)]:bg-[#faf9f6]/60 backdrop-blur-xl [-webkit-backdrop-filter:blur(24px)]">
          <div className="justify-between items-center flex px-4 h-[48px]">
            {/* Logo cell */}
            <div className="flex items-center justify-center">
              <a
                href="/"
                aria-label="logo"
                className="min-w-[120px] flex !justify-start text-dark !uppercase"
              >
                <img src={logo} alt="logo" className="h-[24px] w-auto" />
              </a>
            </div>

            {/* Right cluster: nav + primary CTA + mobile trigger */}
            <div className="flex items-center justify-center">
              <div className="flex">
                {navLinks?.length > 0 &&
                  navLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className={cn(
                        index === 0 ? 'border-l border-gray-300' : '',
                        'border-r border-gray-300 hidden lg:flex w-fit !h-[54px] px-6 hover:text-red-800 !text-xs items-center justify-center text-dark !uppercase'
                      )}
                    >
                      {item.label}
                    </a>
                  ))}
              </div>

              {/* Primary CTA: UserMenu when logged-in, Login button otherwise */}
              {isLoggedIn ? (
                resolvedUserMenu ? (
                  <UserMenu items={resolvedUserMenu} />
                ) : null
              ) : onLogin ? (
                <button
                  type="button"
                  className="flex items-center justify-center text-white px-4 mx-4 lg:mr-0 bg-red-800 !text-xs text-nowrap hover:bg-black !h-[32px] !font-normal rounded-full"
                  onClick={onLogin}
                >
                  Login/Sign Up
                </button>
              ) : null}

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="items-center outline-none flex lg:hidden ml-2"
                aria-label="Menu"
                aria-expanded={menuOpen}
                aria-controls="viasocket-ui-mobile-panel"
              >
                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer (replaces project-specific <Menubar/>) */}
        {menuOpen && (
          <div
            id="viasocket-ui-mobile-panel"
            className="fixed inset-0 z-[110] lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <div className="absolute right-0 top-0 h-full w-72 bg-[#faf9f6] shadow-xl flex flex-col">
              <div className="flex items-center justify-between px-4 h-[48px] border-b border-gray-300">
                <span className="!text-xs uppercase text-dark">Menu</span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="outline-none"
                >
                  <CloseIcon className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col" aria-label="Mobile">
                {navLinks?.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="px-4 py-3 border-b border-gray-200 !text-xs uppercase text-dark hover:text-accent"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="p-4 flex flex-col gap-2 mt-auto">
                {!isLoggedIn && onLogin && (
                  <button
                    type="button"
                    className="flex items-center justify-center text-white px-4 bg-accent !text-xs text-nowrap hover:bg-black !h-[32px] !font-normal rounded-full"
                    onClick={() => {
                      onLogin();
                      setMenuOpen(false);
                    }}
                  >
                    Login/Sign Up
                  </button>
                )}

                {isLoggedIn &&
                  resolvedUserMenu?.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="text-left px-2 py-2 !text-xs uppercase text-dark hover:text-accent"
                      onClick={() => {
                        item.onClick();
                        setMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

Header.displayName = 'Header';

export default Header;
