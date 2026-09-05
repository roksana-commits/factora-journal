/** ARCHIVAL SIGNAL — branded error record, excluded from search indexing. */
import { ArrowLeft, FileQuestion } from "lucide-react";
import { Link } from "wouter";
import Seo from "@/components/Seo";
import { InternalShell } from "@/components/InternalShell";

export default function NotFound() {
  return (
    <InternalShell>
      <Seo
        path="/404"
        title="Page Not Found | Factora Journal"
        description="The requested Factora Journal page could not be found."
        noIndex
      />
      <main id="main-content" className="not-found-page">
        <div className="page-frame not-found-grid">
          <div className="not-found-code">404</div>
          <div>
            <p className="eyebrow light"><span>?</span> Missing record</p>
            <FileQuestion size={46} />
            <h1>This page is not in the file.</h1>
            <p>The address may be incorrect, or the page may have moved. No entity profile is published at this location.</p>
            <Link href="/" className="primary-action"><ArrowLeft size={18} /> Return to the journal</Link>
          </div>
        </div>
      </main>
    </InternalShell>
  );
}
