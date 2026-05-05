import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Header, Footer } from "../src";
import type {
  FooterBadge,
  FooterBottomLink,
  FooterLinkGroup,
  NavLink,
  SocialLink,
  UserMenuItem,
} from "../src";

/* ============== Header demo data (unchanged) ============== */

const navLinks: NavLink[] = [
  { label: "Usecases", link: "/departments" },
  { label: "Features", link: "/features" },
  { label: "Explore Apps", link: "/integrations" },
  { label: "Pricing", link: "/pricing" },
];

const ArrowUpRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-3 h-3"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const TopBarActions = () => (
  <>
    <a
      href="https://cal.id/team/viasocket/sales-team"
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="!uppercase hidden border-l border-gray-300 lg:flex w-fit px-[19.4px] !h-[30px] items-center justify-center cursor-pointer hover:text-red-800 !text-xs text-nowrap text-dark"
    >
      Contact Sales
    </a>
    <a
      href="https://cal.id/team/viasocket/hire-an-expert"
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="!uppercase hidden border-l border-gray-300 lg:flex w-fit px-[19px] !h-[30px] items-center justify-center cursor-pointer hover:text-red-800 !text-xs text-nowrap text-dark"
    >
      Hire an expert
    </a>
    <a
      href="/support"
      className="!uppercase border-l border-gray-300 hidden lg:flex w-fit px-4 !h-[30px] items-center justify-center cursor-pointer text-blue-500 !text-xs gap-1"
    >
      Support <ArrowUpRight />
    </a>
  </>
);

/* ============== Footer demo data ============== */

// Real viasocket-web data shape (after grouping). All content is the host
// app's responsibility — the library has zero hardcoded content.
const linkGroups: FooterLinkGroup[] = [
  {
    title: "For SaaS",
    links: [
      {
        label: "List Your App",
        link: "https://cal.id/team/viasocket/bring-saas-app-on-viasocket",
      },
      {
        label: "Build Your Own Plug",
        link: "/help/plugin-builder/what-is-plugin-builder-in-viasocket",
      },
      { label: "Embed", link: "/embed" },
      { label: "Whitelabel MCP Server", link: "/mcp/saas" },
      {
        label: "Become a Billing Partner",
        link: "/help/partners/billing-partner-program",
      },
      {
        label: "Showcase Popular Workflows",
        link: "/help/viasocket-embed/Discover-the-Power-of-Automation-with-viasocket-Integration-Script",
      },
    ],
  },
  {
    title: "For AI Agent Builders",
    links: [
      { label: "viaSocket Embed", link: "/embed", highlight: true },
      { label: "MCP Marketplace", link: "/mcp-marketplace" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Book a Demo", link: "/book-a-demo" },
      { label: "Contact Support Team", link: "/support" },
      { label: "Request a Feature", link: "/request-feature" },
      { label: "Knowledge Base", link: "/knowledge-base" },
      { label: "Community", link: "/community" },
      { label: "Blog", link: "/blog" },
      { label: "Download Mobile App", link: "/mobile-app" },
    ],
    extra: (
      <button
        type="button"
        className="text-sm text-left hover:text-blue-500 transition-colors duration-300"
        onClick={() => alert("Open request-integration popup")}
      >
        Request an Integration
      </button>
    ),
  },
  {
    title: "Automation Experts",
    links: [
      { label: "Hire an Expert", link: "/hire-expert" },
      { label: "Become a Partner", link: "/become-partner" },
      { label: "Partner Program", link: "/partner-program" },
    ],
  },
  {
    title: "MCP",
    links: [
      { label: "MCP Marketplace", link: "/mcp-marketplace" },
      { label: "MCP for AI Agents", link: "/mcp-ai-agents" },
      { label: "MCP for SaaS Players", link: "/mcp-saas" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "viaSocket vs Zapier", link: "/vs-zapier" },
      { label: "viaSocket vs Make", link: "/vs-make" },
      { label: "viaSocket vs Pabbly", link: "/vs-pabbly" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", link: "/about" },
      { label: "We are Hiring", link: "/careers" },
      { label: "Culture We Foster", link: "/culture" },
      { label: "Roadmap", link: "/roadmap" },
      { label: "AI Transparency", link: "/ai-transparency" },
    ],
  },
  {
    title: "Plans, Pricing and Offer",
    links: [
      { label: "Pricing", link: "/pricing" },
      { label: "Startups plan", link: "/startups" },
      { label: "Discount for Developing Nations", link: "/discount" },
      { label: "Free Access Programs", link: "/free-access" },
    ],
  },
  {
    title: "AI & Automation",
    links: [
      { label: "Apps Integrations", link: "/integrations" },
      { label: "Features", link: "/features" },
      { label: "List Your App", link: "/list-your-app" },
      { label: "Automations", link: "/automations" },
      { label: "Discover Top Apps", link: "/top-apps" },
      { label: "Embed", link: "/embed" },
      { label: "Workflow Automation Guide", link: "/workflow-guide" },
    ],
  },
];

const socialLinks: SocialLink[] = [
  {
    label: "instagram",
    type: "instagram",
    link: "https://www.instagram.com/viasocket/",
  },
  {
    label: "linkedin",
    type: "linkedin",
    link: "https://www.linkedin.com/company/viasocket-walkover/",
  },
  { label: "twitter", type: "twitter", link: "https://x.com/viasocket" },
  {
    label: "youtube",
    type: "youtube",
    link: "https://www.youtube.com/@viasocket",
  },
  {
    label: "discord",
    type: "discord",
    link: "https://discord.com/invite/wqsSsMAkkz",
  },
];

const badges: FooterBadge[] = [
  {
    src: "https://brand-assets.capterra.com/badge/3b902cef-5889-4a4e-afaa-855d73a3d238.svg",
    alt: "Capterra software reviews badge",
    width: 100,
    height: 100,
  },
  {
    src: "https://www.g2.com/shared-assets/product-badges/users-love-us.svg",
    alt: "G2 Users Love Us badge",
    width: 100,
    height: 60,
    style: { height: "60px" },
  },
];

const bottomLinks: FooterBottomLink[] = [
  { label: "Privacy", link: "/privacy" },
  { label: "Terms", link: "/terms" },
  {
    label: "Data Retention & Deletion Policy",
    link: "/data-retention-deletion",
  },
];

/* ============== App ============== */

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const userMenu: UserMenuItem[] = [
    { label: "Dashboard", onClick: () => console.log("go to dashboard") },
    { label: "Settings", onClick: () => console.log("go to settings") },
    { label: "Logout", onClick: () => setLoggedIn(false) },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header
        logo=""
        navLinks={navLinks}
        actions={<TopBarActions />}
        userMenu={userMenu}
        isLoggedIn={isLoggedIn}
        onLogin={() => (window.location.href = "https://flow.viasocket.com?")}
      />
      {/* <div className="h-[78px]" /> */}
      <hr className="my-12" />

      <Footer
        logo="viaSocket"
        linkGroups={linkGroups}
        socialLinks={socialLinks}
        badges={badges}
        bottomLinks={bottomLinks}
        legalLine="Walkover Web Solutions Pvt Ltd. | All rights reserved."
      />
    </div>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
