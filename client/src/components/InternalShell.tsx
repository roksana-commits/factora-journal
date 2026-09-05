/** ARCHIVAL SIGNAL — reusable internal-page chrome with compact masthead and policy-rich footer. */
import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const mark = "https://factorajnl-wsynrwoe.manus.space/manus-storage/factora-mark_3e3e5d50.png";

export function InternalHeader() {
  return (
    <>
      <div className="research-strip internal-strip">
        <div className="page-frame research-strip-inner">
          <span className="signal-dot" aria-hidden="true" />
          <p>Factora Journal <span>·</span> Editorial & legal desk</p>
          <Link href="/contact" className="strip-link">Contact the journal <ArrowUpRight size={12} /></Link>
        </div>
      </div>
      <header className="masthead internal-masthead">
        <div className="page-frame masthead-inner">
          <Link className="brand-lockup" href="/" aria-label="Factora Journal home">
            <span className="brand-mark-wrap"><img src={mark} alt="" className="brand-mark" /></span>
            <span><strong><span className="brand-f">F</span>actora</strong><small>Independent evidence journal</small></span>
          </Link>
          <nav className="internal-nav" aria-label="Editorial navigation">
            <Link href="/about">About</Link>
            <Link href="/methodology">Method</Link>
            <Link href="/corrections">Corrections</Link>
            <Link href="/contact" className="internal-contact-link">Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export function InternalFooter() {
  return (
    <footer className="site-footer internal-footer">
      <div className="page-frame footer-main">
        <div className="footer-brand">
          <Link className="brand-lockup" href="/">
            <span className="brand-mark-wrap"><img src={mark} alt="" className="brand-mark" /></span>
            <span><strong><span className="brand-f">F</span>actora</strong><small>Independent evidence journal</small></span>
          </Link>
          <p>An independent demonstration of source-conscious reference publishing.</p>
        </div>
        <div className="footer-column link-column">
          <strong>Editorial</strong>
          <Link href="/editorial-policy">Editorial policy</Link>
          <Link href="/source-policy">Source policy</Link>
          <Link href="/methodology">Methodology</Link>
          <Link href="/corrections">Corrections</Link>
        </div>
        <div className="footer-column link-column">
          <strong>Legal</strong>
          <Link href="/legal/privacy">Privacy</Link>
          <Link href="/legal/terms">Terms</Link>
          <Link href="/legal/cookies">Cookies</Link>
          <Link href="/legal/disclaimer">Disclaimer</Link>
        </div>
        <div className="footer-statement">
          <span>Independent by design</span>
          <p>Sources are visible. Uncertainty is not hidden.</p>
        </div>
      </div>
      <div className="page-frame footer-bottom">
        <p>© 2026 Factora Journal · Pre-publication edition</p>
        <p><Link href="/contact">Contact</Link> · <a href="/sitemap.xml">Sitemap</a> · <a href="/llms.txt">LLM guide</a></p>
      </div>
    </footer>
  );
}

export function InternalShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell internal-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <InternalHeader />
      {children}
      <InternalFooter />
    </div>
  );
}
