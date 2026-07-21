export type NavItem = {
  label: string;
  href: string;
  icon: string;
  badge?: string;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export const navGroups: NavGroup[] = [
  {
    title: "Main Console",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: "dashboard" },
      { label: "Projects", href: "/projects", icon: "folder_copy" },
      { label: "Content Creator", href: "/tools/article-generator", icon: "auto_awesome", badge: "AI" },
    ],
  },
  {
    title: "Writing Tools",
    items: [
      { label: "Grammar & Spell Checker", href: "/tools/grammar-checker", icon: "spellcheck" },
      { label: "AI Humanizer", href: "/tools/humanizer", icon: "person_check" },
      { label: "Paraphraser", href: "/tools/paraphraser", icon: "transform" },
      { label: "Rewriter", href: "/tools/rewriter", icon: "edit_note" },
      { label: "Summarizer", href: "/tools/summarizer", icon: "summarize" },
      { label: "Translator", href: "/tools/translator", icon: "translate" },
    ],
  },
  {
    title: "Content Intelligence",
    items: [
      { label: "Marketing Email Writer", href: "/tools/marketing-email", icon: "mail" },
      { label: "Product Description Writer", href: "/tools/product-description", icon: "shopping_bag" },
      { label: "Social Ad Creator", href: "/tools/social-ad", icon: "campaign" },
    ],
  },
  {
    title: "Workspace Assets",
    items: [
      { label: "Templates", href: "/templates", icon: "description" },
      { label: "Team", href: "/team", icon: "group" },
      { label: "Integrations", href: "/integrations", icon: "hub" },
    ],
  },
];
