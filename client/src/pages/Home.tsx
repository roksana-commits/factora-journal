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
  hero: "/manus-storage/factora-hero_8920929a.jpg",
  delta: "/manus-storage/factora-delta_625cc60e.jpg",
  archive: "/manus-storage/factora-archive_a166eecd.jpg",
  researcher: "/manus-storage/factora-researcher_ae46a853.jpg",
  mark: "/manus-storage/factora-mark_3e3e5d50.png",
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
    title: "The Meghna Delta",
    category: "Places",
    region: "Bangladesh",
    updated: "Research file 01",
    summary:
      "A geographic file tracing a living network of rivers, settlements and public infrastructure through maps and institutional records.",
    image: assets.delta,
  },
  {
    title: "Begum Rokeya",
    category: "People",
    region: "South Asia",
    updated: "Research file 02",
    summary:
      "A reading file bringing together public archives and scholarship around a consequential writer, educator and reformer.",
    image: assets.researcher,
  },
  {
    title: "Bangladesh National Museum",
    category: "Organizations",
    region: "Bangladesh",
    updated: "Research file 03",
    summary:
      "An institutional profile organized around collections, stewardship, governance and the public record.",
    image: assets.archive,
  },
  {
    title: "University of Dhaka",
    category: "Universities & Colleges",
    region: "Bangladesh",
    updated: "Research file 04",
    summary:
      "A structured research file on an institution, its recorded milestones and its place in public life.",
  },
  {
    title: "The Bengali Language Movement",
    category: "Events & Documents",
    region: "South Asia",
    updated: "Research file 05",
    summary:
      "A documentary pathway through declarations, dates, participants and archival interpretations.",
  },
  {
    title: "A River Called Titash",
    category: "Creative Works",
    region: "Bengal",
    updated: "Research file 06",
    summary:
      "A contextual file connecting a creative work to publication history, adaptation and the world around it.",
  },
  {
    title: "A Public School Archive",
    category: "Schools",
    region: "Demonstration file",
    updated: "Research file 07",
    summary:
      "A model school profile showing how statutory records, institutional material and independent reporting can be separated clearly.",
  },
];

const navItems = ["Index", "Research", "Standards", "About"];

function Brand() {
  return (
    <a className="brand-lockup" href="#top" aria-label="Factora Journal home">
      <span className="brand-mark-wrap">
        <img src={assets.mark} alt="" className="brand-mark" />
      </span>
      <span>
        <strong>Factora</strong>
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
    toast("Demonstration edition", {
      description: `${label} is represented as a homepage prototype in this static edition.`,
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
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="research-strip">
        <div className="page-frame research-strip-inner">
          <span className="signal-dot" aria-hidden="true" />
          <p>
            Demonstration edition <span>·</span> Seven open research files
          </p>
          <p className="strip-right">Updated 05 Sep 2026 · GMT+6</p>
        </div>
      </div>

      <header className="masthead">
        <div className="page-frame masthead-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
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
          <div className="hero-copy">
            <p className="eyebrow">
              <span>01</span> Independent reference profiles
            </p>
            <h1 id="hero-heading">
              Every name leaves a <em>paper trail.</em>
            </h1>
            <p className="hero-intro">
              Factora builds source-conscious profiles of people, places and institutions—so the record is
              easier to read, question and correct.
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
                <dd>7 collections</dd>
              </div>
              <div>
                <dt>Evidence</dt>
                <dd>Public records first</dd>
              </div>
              <div>
                <dt>Policy</dt>
                <dd>Corrections stay visible</dd>
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
              <p className="vertical-caption">Current dossier · Place file</p>
              <figure className="featured-image">
                <img src={assets.delta} alt="Aerial view of branching river channels across a green delta" />
                <figcaption>Field image / demonstration edition</figcaption>
              </figure>
            </div>
            <article className="featured-copy">
              <p className="eyebrow light"><span>03</span> Featured research file</p>
              <div className="file-meta">
                <span>Places</span><span>Bangladesh</span><span>File 01</span>
              </div>
              <h2>The Meghna Delta</h2>
              <p className="featured-deck">
                A landscape shaped by moving water, human settlement and layers of public record.
              </p>
              <p className="featured-body">
                This demonstration file shows how a Factora profile moves between maps, institutional publications
                and independent reporting without flattening uncertainty into a single neat answer.
              </p>
              <button className="light-action" type="button" onClick={() => showDemoNotice("The Meghna Delta dossier")}>
                Read the research note <ArrowUpRight size={18} />
              </button>
              <div className="source-card">
                <ShieldCheck size={24} />
                <div>
                  <strong>Source status</strong>
                  <span>Public records + institutional material + independent reporting</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="research" className="research-section page-frame">
          <div className="section-heading split-heading research-heading">
            <div>
              <p className="eyebrow"><span>04</span> Recently researched</p>
              <h2>Notes from the desk.</h2>
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
                {profile.image ? (
                  <div className="row-thumb">
                    <img src={profile.image} alt="" loading="lazy" />
                  </div>
                ) : (
                  <div className="row-monogram" aria-hidden="true">{profile.title.charAt(0)}</div>
                )}
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
              <button type="button" className="text-action dark" onClick={() => showDemoNotice("Editorial standards")}>
                See the editorial standard <ArrowUpRight size={16} />
              </button>
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
            {["Methodology", "Source policy", "Corrections", "Contact"].map((label) => (
              <button key={label} type="button" onClick={() => showDemoNotice(label)}>{label}</button>
            ))}
          </div>
          <div className="footer-statement">
            <span>Independent by design</span>
            <p>Entities do not approve, sponsor or review their Factora profiles.</p>
          </div>
        </div>
        <div className="page-frame footer-bottom">
          <p>© 2026 Factora Journal · Demonstration edition</p>
          <p>Built around sources, context and visible correction.</p>
        </div>
      </footer>

      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="search-dialog sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Search the open files</DialogTitle>
            <DialogDescription>Search by entity, collection or region.</DialogDescription>
          </DialogHeader>
          <div className="search-field">
            <Search size={19} />
            <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try ‘People’ or ‘Bangladesh’" />
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
            {navItems.map((item, index) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>{item}<ArrowUpRight size={18} />
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
