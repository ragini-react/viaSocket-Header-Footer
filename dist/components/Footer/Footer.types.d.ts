import { CSSProperties, MouseEvent, ReactNode } from 'react';
import { Theme } from '../Header/Header.types';

export interface FooterLink {
    label: string;
    link: string;
    /** Open in a new tab. Defaults to true (matches original behaviour). */
    external?: boolean;
    /**
     * Render this link in the brand-blue highlight color (matches the
     * blue links in the design, e.g. "viaSocket Embed").
     */
    highlight?: boolean;
}
export interface FooterLinkGroup {
    /** Group heading. */
    title: string;
    links: FooterLink[];
    /**
     * Render slot rendered after the group's links — useful for things like
     * a "Request an Integration" CTA, newsletter signup, etc.
     */
    extra?: ReactNode;
}
/** Trust badge image (Capterra, G2, ProductHunt, etc.). */
export interface FooterBadge {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    style?: CSSProperties;
}
export interface SocialLink {
    /** Used for `aria-label`. */
    label: string;
    /** Absolute URL. */
    link: string;
    /** Optional custom icon. Overrides `type`. */
    icon?: ReactNode;
    /** Built-in icon. */
    type?: 'twitter' | 'github' | 'linkedin' | 'facebook' | 'instagram' | 'youtube' | 'discord';
}
export interface FooterBottomLink {
    label: string;
    link?: string;
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}
export interface FooterProps {
    /**
     * Brand mark shown in the rotated/oversized left column.
     * Pass a string (text or image URL) or any ReactNode.
     */
    logo: string | ReactNode;
    /** Link columns. Distributed evenly across the right grid (3 sub-columns). */
    linkGroups: FooterLinkGroup[];
    /** Social icons. Rendered in the middle sub-column. */
    socialLinks?: SocialLink[];
    /** Trust badges rendered above the social icons. */
    badges?: FooterBadge[];
    /**
     * Copyright content. If omitted, defaults to "© {year}" plus the logo when
     * it's a string. Pass a ReactNode for fully custom inline content.
     */
    copyright?: string | ReactNode;
    /** Optional second copyright line (e.g. legal entity / "All rights reserved."). */
    legalLine?: string | ReactNode;
    /**
     * Optional inline legal links (Privacy, Terms, etc.) rendered alongside
     * the default copyright when `copyright` itself isn't a custom node.
     */
    bottomLinks?: FooterBottomLink[];
    /** Visual theme. `dark` switches the border palette to white. */
    theme?: Theme;
    /** Extra className appended to the outer wrapper. */
    className?: string;
}
