/**
 * ARCHIVAL SIGNAL — editorial desk composition, warm paper, midnight ink,
 * Evidence Vermilion accents, visible provenance, and asymmetric hierarchy.
 */
import { FormEvent, useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpenText,
  Check,
  ChevronRight,
  FileSearch,
  Library,
  Mail,
  Menu,
  Search,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";
import { Link } from "wouter";
import Seo from "@/components/Seo";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const assets = {
  hero: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030736112/PeQYVHfGpZolyVGq.jpg",
  archive: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030736112/UeeLQELYEUjGolOz.jpg",
  mark: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030736112/NIvPnqRdzdxoPpxy.png",
};

const categories = [
  { name: "Schools", note: "Records, governance & communities" },
  { name: "Universities & Colleges", note: "Institutions, charters & change" },
  { name: "People", note: "Public lives, carefully sourced" },
  { name: "Organizations", note: "Institutions, companies & networks" },
  { name: "Places", note: "Landscapes, sites & infrastructure" },
  { name: "Events & Documents", note: "Moments, records & declarations" },
  { name: "Creative Works", note: "Stories beyond ordinary criticism" },
];

const profiles = [
  {
    title: "Schools",
    category: "Schools",
    region: "Collection framework",
    updated: "Profiles not yet published",
    summary: "A research framework for governance, public records, institutional history and community context.",
  },
  {
    title: "Universities & Colleges",
    category: "Universities & Colleges",
    region: "Collection framework",
    updated: "Profiles not yet published",
    summary: "A structured approach to charters, oversight, institutional change and the public record.",
  },
  {
    title: "People",
    category: "People",
    region: "Collection framework",
    updated: "Profiles not yet published",
    summary: "Public-interest biographies built from attributable records, independent reporting and disclosed gaps.",
  },
  {
    title: "Organizations",
    category: "Organizations",
    region: "Collection framework",
    updated: "Profiles not yet published",
    summary: "A method for documenting institutions, companies and networks without promotional framing.",
  },
  {
    title: "Places",
    category: "Places",
    region: "Collection framework",
    updated: "Profiles not yet published",
    summary: "Context-led place files connecting authoritative records, history, infrastructure and change over time.",
  },
  {
    title: "Events & Documents",
    category: "Events & Documents",
    region: "Collection framework",
    updated: "Profiles not yet published",
    summary: "A documentary pathway through dates, original records, participants and competing interpretations.",
  },
  {
    title: "Creative Works",
    category: "Creative Works",
    region: "Collection framework",
    updated: "Profiles not yet published",
    summary: "Context files for notable works with a documented history beyond routine critical reception.",
  },
];

const navItems = [
  { label: "Index", href: "#index", route: false },
  { label: "Research", href: "#research", route: false },
  { label: "Method", href: "/methodology", route: true },
  { label: "About", href: "/about", route: true },
];

function Brand() {
  return (
    <a className="brand-lockup" href="#top" aria-label="Factora Journal home">
      <span className="brand-mark-wrap">
        <img src={assets.mark} alt="" className="brand-mark" />
      </span>
      <span>
        <strong><span className="brand-f">F</span>actora</strong>
        <small>Independent evidence journal</small>
      </span>
    </a>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All files");
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const visibleProfiles = useMemo(
    () =>
      activeCategory === "All files"
        ? profiles
        : profiles.filter((profile) => profile.category === activeCategory),
    [activeCategory],
  );

  const searchResults = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return profiles.slice(0, 4);
    return profiles.filter((profile) =>
      [profile.title, profile.category, profile.region]
        .join(" ")
        .toLowerCase()
        .includes(cleanQuery),
    );
  }, [query]);

  const showDemoNotice = (label: string) =>
    toast("Collection in preparation", {
      description: `${label} has no published entity profiles yet.`,
    });

  const exploreCategory = (category: string) => {
    setActiveCategory(category);
    document.getElementById("research")?.scrollIntoView({ behavior: "smooth" });
  };

  const submitDispatch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("You are on the dispatch list", {
      description: "This static demo keeps no personal data.",
    });
    event.currentTarget.reset();
  };

  return (
    <div id="top" className="site-shell">
      <Seo
        path="/"
        title="Independent Reference Profiles for the US & Europe | Factora"
        description="Factora Journal prepares source-conscious reference profiles for US and European audiences, with transparent methods, source labels and corrections."
      />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="research-strip">
        <div className="page-frame research-strip-inner">
          <span className="signal-dot" aria-hidden="true" />
          <p>
            Pre-publication edition <span>·</span> Seven collections in preparation
          </p>
          <p className="strip-right">Updated 05 Sep 2026 · GMT+6</p>
        </div>
      </div>

      <header className="masthead">
        <div className="page-frame masthead-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => item.route ? (
              <Link key={item.label} href={item.href}>{item.label}</Link>
            ) : (
              <a key={item.label} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <div className="header-actions">
            <button className="search-trigger" type="button" onClick={() => setSearchOpen(true)}>
              <Search size={17} aria-hidden="true" />
              <span>Search files</span>
              <kbd>⌘ K</kbd>
            </button>
            <button
              className="menu-trigger"
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={23} />
            </button>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero page-frame" aria-labelledby="hero-heading">
          <aside className="home-provenance-rail" aria-label="Publication provenance">
            <span>Edition 00</span><i aria-hidden="true" /><span>Reviewed 05.09.26</span><span>Status · Pre-publication</span>
          </aside>
          <div className="hero-copy">
            <p className="eyebrow">
              <span>01</span> Independent reference profiles
            </p>
            <h1 id="hero-heading">
              Every name leaves a <em>paper trail.</em>
            </h1>
            <p className="hero-intro">
              Factora is preparing source-conscious profiles for readers in the United States and Europe—so
              public records will be easier to read, question and correct.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#featured">
                Open the current dossier <ArrowDownRight size={18} />
              </a>
              <a className="text-action" href="#standards">
                Read our method <ArrowUpRight size={16} />
              </a>
            </div>
            <dl className="hero-notes">
              <div>
                <dt>Scope</dt>
                <dd>US + Europe</dd>
              </div>
              <div>
                <dt>Evidence</dt>
                <dd>Public records first</dd>
              </div>
              <div>
                <dt>Reviewed</dt>
                <dd>05 September 2026</dd>
              </div>
            </dl>
          </div>

          <div className="hero-visual-wrap">
            <div className="folio-note" aria-hidden="true">
              Vol. 01 / 2026
            </div>
            <figure className="hero-visual">
              <img src={assets.hero} alt="Archival research desk with maps, folders and a verification stamp" />
              <figcaption>
                <span>Evidence desk</span>
                <strong>Records before conclusions.</strong>
              </figcaption>
            </figure>
            <div className="verification-seal">
              <Check size={21} strokeWidth={2.5} />
              <span>Source<br />checked</span>
            </div>
          </div>
        </section>

        <section id="index" className="category-section">
          <div className="page-frame">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow"><span>02</span> The index</p>
                <h2>Browse the record.</h2>
              </div>
              <p>Seven paths through the same principle: show what is known, identify the source and mark what remains open.</p>
            </div>

            <div className="category-index">
              {categories.map((category, index) => (
                <button key={category.name} type="button" onClick={() => exploreCategory(category.name)}>
                  <span className="category-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="category-name">{category.name}</span>
                  <span className="category-note">{category.note}</span>
                  <ChevronRight className="category-arrow" size={20} />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="featured" className="featured-section">
          <div className="page-frame featured-layout">
            <div className="featured-image-column">
              <p className="vertical-caption">Publication workflow · Open method</p>
              <figure className="featured-image">
                <img src={assets.archive} alt="Archive reading room with catalogues and source material" />
                <figcaption>Evidence workflow / pre-publication</figcaption>
              </figure>
            </div>
            <article className="featured-copy">
              <p className="eyebrow light"><span>03</span> Publication dossier</p>
              <div className="file-meta">
                <span>Editorial workflow</span><span>Pre-publication</span><span>Method 01</span>
              </div>
              <h2>Before a profile is published.</h2>
              <p className="featured-deck">
                Every future entity file must pass the same visible evidence standard.
              </p>
              <p className="featured-body">
                Research begins with a clearly defined subject, moves through public records and independent
                reporting, and remains unpublished until claims, context and open questions have been reviewed.
              </p>
              <Link className="light-action" href="/methodology">Read the methodology <ArrowUpRight size={18} /></Link>
              <div className="source-card">
                <ShieldCheck size={24} />
                <div>
                  <strong>Publication gate</strong>
                  <span>No named profile appears before its editorial file is ready.</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="research" className="research-section page-frame">
          <div className="section-heading split-heading research-heading">
            <div>
              <p className="eyebrow"><span>04</span> Publication status</p>
              <h2>Collections in preparation.</h2>
            </div>
            <div className="filter-wrap" aria-label="Filter research files">
              <label htmlFor="category-filter">Viewing</label>
              <select
                id="category-filter"
                value={activeCategory}
                onChange={(event) => setActiveCategory(event.target.value)}
              >
                <option>All files</option>
                {categories.map((category) => <option key={category.name}>{category.name}</option>)}
              </select>
            </div>
          </div>

          <div className="research-list">
            {visibleProfiles.map((profile, index) => (
              <article className="research-row" key={profile.title}>
                <div className="row-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="row-monogram" aria-hidden="true">{profile.title.charAt(0)}</div>
                <div className="row-main">
                  <div className="row-meta">
                    <span>{profile.category}</span>
                    <span>{profile.region}</span>
                  </div>
                  <h3>{profile.title}</h3>
                  <p>{profile.summary}</p>
                </div>
                <div className="row-status">
                  <span>{profile.updated}</span>
                  <button type="button" aria-label={`Open ${profile.title}`} onClick={() => showDemoNotice(profile.title)}>
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="standards" className="standards-section">
          <div className="page-frame standards-layout">
            <div className="standards-copy">
              <p className="eyebrow"><span>05</span> Evidence standard</p>
              <h2>Trust is a process, not a badge.</h2>
              <p>
                Factora separates a source from the claim it supports. First-party statements are labelled,
                disagreements remain visible and corrections become part of the record.
              </p>
              <Link href="/methodology" className="text-action dark">
                See the editorial standard <ArrowUpRight size={16} />
              </Link>
            </div>
            <ol className="standard-steps">
              <li>
                <FileSearch />
                <span>01</span>
                <div><strong>Find the record</strong><p>Begin with traceable public and published material.</p></div>
              </li>
              <li>
                <Library />
                <span>02</span>
                <div><strong>Separate the voices</strong><p>Distinguish official claims from independent accounts.</p></div>
              </li>
              <li>
                <BookOpenText />
                <span>03</span>
                <div><strong>Show the gaps</strong><p>Open questions are documented instead of disguised.</p></div>
              </li>
            </ol>
          </div>
        </section>

        <section id="about" className="dispatch-section">
          <div className="page-frame dispatch-layout">
            <div>
              <p className="eyebrow light"><span>06</span> Monthly dispatch</p>
              <h2>New files. Better questions.</h2>
            </div>
            <div className="dispatch-form-wrap">
              <p>A concise monthly note on recently opened files, useful records and meaningful corrections.</p>
              <form onSubmit={submitDispatch}>
                <Mail size={19} aria-hidden="true" />
                <label className="sr-only" htmlFor="dispatch-email">Email address</label>
                <input id="dispatch-email" name="email" type="email" required placeholder="you@example.com" />
                <button type="submit">Join dispatch <ArrowUpRight size={17} /></button>
              </form>
              <small>No tracking pixels. No weekly noise. This demo stores no data.</small>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-frame footer-main">
          <div className="footer-brand">
            <Brand />
            <p>An independent demonstration of source-conscious reference publishing.</p>
          </div>
          <div className="footer-column">
            <strong>Browse</strong>
            {categories.slice(0, 4).map((category) => (
              <button key={category.name} type="button" onClick={() => exploreCategory(category.name)}>{category.name}</button>
            ))}
          </div>
          <div className="footer-column">
            <strong>Editorial</strong>
            <Link href="/methodology">Methodology</Link>
            <Link href="/source-policy">Source policy</Link>
            <Link href="/corrections">Corrections</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-statement">
            <span>Independent by design</span>
            <p>Entities do not approve, sponsor or review their Factora profiles.</p>
          </div>
        </div>
        <div className="page-frame footer-bottom">
          <p>© 2026 Factora Journal · Pre-publication edition</p>
          <p><Link href="/legal/privacy">Privacy</Link> · <Link href="/legal/terms">Terms</Link> · <a href="/sitemap.xml">Sitemap</a> · <a href="/llms.txt">LLM guide</a></p>
        </div>
      </footer>

      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="search-dialog sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Search the collections</DialogTitle>
            <DialogDescription>Search the collection frameworks currently in preparation.</DialogDescription>
          </DialogHeader>
          <div className="search-field">
            <Search size={19} />
            <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try ‘Schools’ or ‘Places’" />
          </div>
          <div className="search-results">
            {searchResults.length ? searchResults.map((profile) => (
              <button
                type="button"
                key={profile.title}
                onClick={() => {
                  setSearchOpen(false);
                  setActiveCategory("All files");
                  document.getElementById("research")?.scrollIntoView({ behavior: "smooth" });
                  showDemoNotice(profile.title);
                }}
              >
                <span><strong>{profile.title}</strong><small>{profile.category} · {profile.region}</small></span>
                <ArrowUpRight size={18} />
              </button>
            )) : <p className="empty-search">No open file matches that search.</p>}
          </div>
        </DialogContent>
      </Dialog>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="right" className="mobile-sheet">
          <SheetHeader>
            <SheetTitle>Factora index</SheetTitle>
            <SheetDescription>Explore this demonstration edition.</SheetDescription>
          </SheetHeader>
          <nav aria-label="Mobile navigation">
            {navItems.map((item, index) => item.route ? (
              <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>{item.label}<ArrowUpRight size={18} />
              </Link>
            ) : (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>{item.label}<ArrowUpRight size={18} />
              </a>
            ))}
          </nav>
          <button className="mobile-search" type="button" onClick={() => { setMenuOpen(false); setSearchOpen(true); }}>
            <Search size={18} /> Search the files
          </button>
        </SheetContent>
      </Sheet>
    </div>
  );
}
