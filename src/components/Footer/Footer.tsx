"use client";
import type { FC, ReactNode } from "react";
import { cn } from "../../utils/cn";
import type {
  FooterBadge,
  FooterLinkGroup,
  FooterProps,
  SocialLink,
} from "./Footer.types";

/* ---------- Built-in social icons (replaces lucide-react + YouTubeIcon) ---------- */

/* Lucide-style outline icons (stroke, not filled) — matches the design. */
const strokeIconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

const SOCIAL_ICONS: Record<NonNullable<SocialLink["type"]>, ReactNode> = {
  instagram: (
    <svg {...strokeIconProps} className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  linkedin: (
    <svg {...strokeIconProps} className="w-5 h-5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  twitter: (
    <svg {...strokeIconProps} className="w-5 h-5">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),
  youtube: (
    <svg {...strokeIconProps} className="w-5 h-5">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  ),
  facebook: (
    <svg {...strokeIconProps} className="w-5 h-5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  github: (
    <svg {...strokeIconProps} className="w-5 h-5">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  discord: (
    <svg {...strokeIconProps} className="w-5 h-5">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
};

/* ---------- Helpers ---------- */

const renderLogo = (logo: FooterProps["logo"]): ReactNode => {
  if (logo == null) return null;
  if (typeof logo === "string") {
    const isImage = /^(https?:)?\/\/|\.(png|jpe?g|svg|webp|gif)(\?|$)/i.test(
      logo,
    );
    return isImage ? (
      <img src={logo} alt="logo" className="w-full object-contain" />
    ) : (
      // Default rendering matches the original rotated brand mark — text reads
      // top-to-bottom with letters rotated 90deg clockwise.
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <p className="rotate-viasocket font-extrabold leading-none">{logo}</p>
      </div>
    );
  }
  return logo;
};

const renderSocialIcon = (s: SocialLink): ReactNode => {
  if (s.icon) return s.icon;
  if (s.type && SOCIAL_ICONS[s.type]) return SOCIAL_ICONS[s.type];
  return (
    <span className="flex h-5 w-5 items-center justify-center text-xs font-bold">
      {s.label?.[0]?.toUpperCase() ?? "?"}
    </span>
  );
};

const renderBadge = (badge: FooterBadge, idx: number) => (
  <img
    key={idx}
    src={badge.src}
    alt={badge.alt}
    width={badge.width ?? 100}
    height={badge.height ?? 100}
    className={cn("object-contain", badge.className)}
    style={badge.style}
  />
);

const splitInThree = <T,>(arr: T[]): [T[], T[], T[]] => {
  if (!arr?.length) return [[], [], []];
  const size = Math.ceil(arr.length / 3);
  return [arr.slice(0, size), arr.slice(size, 2 * size), arr.slice(2 * size)];
};

/* ---------- Subcomponents ---------- */

interface GroupListProps {
  groups: FooterLinkGroup[];
}

const GroupList: FC<GroupListProps> = ({ groups }) => (
  <>
    {groups.map((group, gIdx) =>
      group.links?.length > 0 || group.extra ? (
        <div className="flex flex-col gap-2 w-full" key={gIdx}>
          <h2 className="font-bold">{group.title}</h2>
          <div className="flex flex-col gap-2">
            {group.links.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target={item.external !== false ? "_blank" : undefined}
                rel={
                  item.external !== false ? "noopener noreferrer" : undefined
                }
                aria-label={item.label}
                className={cn(
                  "hover:text-blue-500 transition-colors duration-300",
                  item.highlight && "text-blue-500",
                )}
              >
                <span className="text-sm">{item.label}</span>
              </a>
            ))}
            {group.extra}
          </div>
        </div>
      ) : null,
    )}
  </>
);

/* ---------- Footer ---------- */

export const Footer: FC<FooterProps> = ({
  logo,
  linkGroups,
  socialLinks = [],
  badges = [],
  copyright,
  legalLine,
  bottomLinks = [],
  theme = "light",
  className,
}) => {
  // Replicates the original `borderTheme = isBlack ? 'white' : 'custom-border'`
  // mapping with idiomatic Tailwind border-color utilities (visually identical).
  const borderTheme = theme === "dark" ? "border-white" : "border-gray-200";

  const [col1, col2, col3] = splitInThree(linkGroups);

  const defaultCopyright: ReactNode =
    typeof copyright === "undefined"
      ? typeof logo === "string"
        ? `© ${new Date().getFullYear()} ${logo}`
        : `© ${new Date().getFullYear()}`
      : copyright;

  const wrapperClass = cn(
    "viasocket-footer-wrapper bg-white grid lg:grid-rows-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-1 ms:grid-cols-4 grid-cols-1 border",
    borderTheme,
    className,
  );

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <footer role="contentinfo" className={wrapperClass}>
        {/* Left column — rotated brand mark */}
        <div
          className={cn(
            "row-span-1 justify-center col-span-4 lg:col-span-1 order-last lg:order-first md:p-10 p-4 h-full lg:border-r border-r-0 flex flex-col",
            borderTheme,
          )}
        >
          {renderLogo(logo)}
        </div>

        {/* Right block — 3 sub-columns */}
        <div className="row-span-1 col-span-4 lg:col-span-3 grid sm:grid-cols-3 grid-cols-1">
          {/* Sub 1 */}
          <div
            className={cn(
              "flex flex-col gap-12 md:p-10 p-4 lg:border-b-0 border-b sm:border-r",
              borderTheme,
            )}
          >
            <GroupList groups={col1} />
          </div>

          {/* Sub 2 — extra groups, badges, socials */}
          <div
            className={cn(
              "flex flex-col gap-12 md:p-10 p-4 sm:border-r lg:border-b-0 border-b",
              borderTheme,
            )}
          >
            <GroupList groups={col2} />

            {(badges.length > 0 || socialLinks.length > 0) && (
              <div className="flex flex-col gap-6 mt-auto p-4">
                {badges.length > 0 && (
                  <div className="flex gap-2 justify-center items-center">
                    {badges.map(renderBadge)}
                  </div>
                )}

                {socialLinks.length > 0 && (
                  <div className="flex gap-2 justify-center items-center md:gap-6">
                    {socialLinks.map((s, idx) => (
                      <a
                        key={idx}
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                      >
                        {renderSocialIcon(s)}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sub 3 — extra groups, copyright */}
          <div
            className={cn(
              "flex flex-col lg:border-b-0 border-b gap-12 md:p-10 p-4",
              borderTheme,
            )}
          >
            <GroupList groups={col3} />

            <div className="flex flex-col gap-2">
              <p className="text-sm flex items-center gap-1 flex-wrap mt-auto">
                {defaultCopyright}
                {bottomLinks.length > 0 && <span>|</span>}
                {bottomLinks.map((l, idx) => {
                  const isLast = idx === bottomLinks.length - 1;
                  const isSecondLast = idx === bottomLinks.length - 2;
                  return (
                    <span key={idx} className="flex items-center gap-1">
                      <a
                        href={l.link || "#"}
                        onClick={l.onClick}
                        className="active-link text-link"
                      >
                        {l.label}
                        {!isLast && !isSecondLast && (
                          <span className="text-black">,</span>
                        )}
                      </a>
                      {isSecondLast && bottomLinks.length > 1 && (
                        <span>and</span>
                      )}
                    </span>
                  );
                })}
              </p>
              {legalLine && (
                <p className="text-sm flex items-center gap-1 flex-wrap">
                  {legalLine}
                </p>
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

Footer.displayName = "Footer";

export default Footer;
