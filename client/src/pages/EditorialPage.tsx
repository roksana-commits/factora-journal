/** ARCHIVAL SIGNAL — long-form document pages with a numbered rail and readable editorial measure. */
import { useEffect } from "react";
import { ArrowUp, ArrowUpRight, Check, FileCheck2, History, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { documents } from "@/content/legal";
import { InternalShell } from "@/components/InternalShell";

const relatedFraming: Record<string, { eyebrow: string; title: string; links: [string, string][] }> = {
  privacy: { eyebrow: "Privacy record", title: "Control begins with clarity.", links: [["Cookie policy", "/legal/cookies"], ["Terms of use", "/legal/terms"], ["Rights request", "/contact"], ["Corrections", "/corrections"]] },
  terms: { eyebrow: "Use and responsibility", title: "Clear terms protect a clear record.", links: [["Editorial policy", "/editorial-policy"], ["Disclaimer", "/legal/disclaimer"], ["Privacy", "/legal/privacy"], ["Contact", "/contact"]] },
  cookies: { eyebrow: "Browser record", title: "Small technologies, stated plainly.", links: [["Privacy", "/legal/privacy"], ["Terms", "/legal/terms"], ["Rights request", "/contact"], ["Disclaimer", "/legal/disclaimer"]] },
  disclaimer: { eyebrow: "Reader context", title: "Know what the record can—and cannot—do.", links: [["Source policy", "/source-policy"], ["Methodology", "/methodology"], ["Corrections", "/corrections"], ["Terms", "/legal/terms"]] },
  editorial: { eyebrow: "Editorial system", title: "Independence is made visible.", links: [["Source policy", "/source-policy"], ["Methodology", "/methodology"], ["Corrections", "/corrections"], ["Contact", "/contact"]] },
  sources: { eyebrow: "Evidence system", title: "A citation must fit the claim.", links: [["Methodology", "/methodology"], ["Editorial policy", "/editorial-policy"], ["Corrections", "/corrections"], ["Disclaimer", "/legal/disclaimer"]] },
  methodology: { eyebrow: "Research sequence", title: "From discovery to a maintainable record.", links: [["Source policy", "/source-policy"], ["Editorial policy", "/editorial-policy"], ["Corrections", "/corrections"], ["Contact", "/contact"]] },
  corrections: { eyebrow: "Accountability record", title: "A correction should remain legible.", links: [["Contact the desk", "/contact"], ["Methodology", "/methodology"], ["Source policy", "/source-policy"], ["Editorial policy", "/editorial-policy"]] },
  about: { eyebrow: "About the journal", title: "The record, with its edges visible.", links: [["Editorial policy", "/editorial-policy"], ["Methodology", "/methodology"], ["Source policy", "/source-policy"], ["Contact", "/contact"]] },
};

export default function EditorialPage({ documentKey }: { documentKey: string }) {
  const document = documents[documentKey];
  const related = relatedFraming[documentKey];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${document.title} — Factora Journal`;
  }, [document.title]);

  return (
    <InternalShell>
      <main id="main-content">
        <header className="document-hero">
          <div className="page-frame document-hero-grid">
            <div>
              <p className="eyebrow light"><span>{document.kicker.includes("Legal") ? "L" : "E"}</span>{document.kicker}</p>
              <h1>{document.title}</h1>
            </div>
            <div className="document-summary">
              <p>{document.summary}</p>
              <dl>
                <div><dt>Status</dt><dd>Current</dd></div>
                <div><dt>Effective</dt><dd>{document.effective}</dd></div>
              </dl>
            </div>
          </div>
        </header>

        <div className="page-frame document-layout">
          <aside className="document-rail" aria-label="On this page">
            <div className="evidence-spine">
              <div className="spine-stamp"><Check size={16} /><span>Reviewed</span></div>
              <dl>
                <div><dt>File</dt><dd>{document.kicker}</dd></div>
                <div><dt>Status</dt><dd>Current · public</dd></div>
                <div><dt>Last reviewed</dt><dd>{document.effective}</dd></div>
              </dl>
              <Link href="/corrections"><History size={14} /> Correction record</Link>
            </div>
            <p>On this page</p>
            <nav>
              {document.sections.map((section, index) => (
                <a href={`#${section.id}`} key={section.id}>
                  <span>{String(index + 1).padStart(2, "0")}</span>{section.title}
                </a>
              ))}
            </nav>
            <Link href="/contact" className="rail-contact">Questions about this page? <ArrowUpRight size={15} /></Link>
          </aside>

          <article className="document-content">
            {document.notice && (
              <div className="document-notice">
                <FileCheck2 size={22} />
                <div><strong>Scope note</strong><p>{document.notice}</p></div>
              </div>
            )}
            {document.sections.map((section, index) => (
              <section id={section.id} key={section.id}>
                <div className="section-folio">Section {String(index + 1).padStart(2, "0")}</div>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.points && (
                  <ul>
                    {section.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                )}
              </section>
            ))}
            <div className="document-end">
              <span>End of file</span>
              <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top <ArrowUp size={15} /></button>
            </div>
          </article>
        </div>

        <section className="policy-crosslinks">
          <div className="page-frame policy-crosslinks-grid">
            <div><p className="eyebrow"><span>+</span> {related.eyebrow}</p><h2>{related.title}</h2></div>
            <div className="crosslink-list">
              {related.links.map(([label, href]) => (
                <Link key={href} href={href}>{label}<ArrowUpRight size={18} /></Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </InternalShell>
  );
}
