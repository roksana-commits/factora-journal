/** ARCHIVAL SIGNAL — transparent contact paths and a clearly scoped static demonstration form. */
import { FormEvent, useEffect, useState } from "react";
import { ArrowUpRight, CheckCircle2, FileWarning, LockKeyhole, Mail, MessageSquareText, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { InternalShell } from "@/components/InternalShell";
import Seo from "@/components/Seo";

const contactPaths = [
  { title: "Correction or source update", note: "Point us to the exact passage and strongest available record.", icon: FileWarning },
  { title: "Privacy or rights request", note: "Identify the relevant page, material and nature of the request.", icon: LockKeyhole },
  { title: "General editorial inquiry", note: "Questions about the journal, its method or a proposed subject.", icon: MessageSquareText },
];

export default function Contact() {
  const [topic, setTopic] = useState(contactPaths[0].title);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us — Factora Journal";
  }, []);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = String(data.get("message") || "").trim();
    if (message.length < 20) {
      toast.error("Please add a little more detail", { description: "A useful editorial message should be at least 20 characters." });
      return;
    }
    setSent(true);
    form.reset();
    setTopic(contactPaths[0].title);
    toast.success("Form checked successfully", { description: "This static demonstration did not transmit or store your message." });
  };

  return (
    <InternalShell>
      <Seo
        path="/contact"
        title="Contact the Editorial Desk | Factora Journal"
        description="Contact Factora Journal about corrections, source updates, privacy requests, accessibility or the editorial methodology."
        schemaType="ContactPage"
      />
      <main id="main-content">
        <header className="contact-hero">
          <div className="page-frame contact-hero-grid">
            <div>
              <p className="eyebrow light"><span>C</span> Contact the journal</p>
              <h1>Good records begin with clear messages.</h1>
            </div>
            <div className="contact-hero-side">
              <p>Send a correction, flag a privacy concern or ask about the editorial method. Specific page links and source details help the review.</p>
              <div className="contact-provenance">
                <ShieldCheck size={20} />
                <dl>
                  <div><dt>Page status</dt><dd>Current</dd></div>
                  <div><dt>Reviewed</dt><dd>5 Sep 2026</dd></div>
                  <div><dt>Delivery</dt><dd>Static demo · inactive</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </header>

        <section className="page-frame contact-paths" aria-label="Contact topics">
          {contactPaths.map(({ title, note, icon: Icon }, index) => (
            <button key={title} type="button" onClick={() => { setTopic(title); document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" }); }}>
              <span className="contact-path-number">0{index + 1}</span>
              <Icon size={25} />
              <strong>{title}</strong>
              <p>{note}</p>
              <ArrowUpRight size={18} />
            </button>
          ))}
        </section>

        <section id="contact-form" className="contact-form-section">
          <div className="page-frame contact-form-grid">
            <div className="contact-form-intro">
              <p className="eyebrow"><span>01</span> Message desk</p>
              <h2>Tell us what needs attention.</h2>
              <p>The present site is a static demonstration. This form validates your message locally but does not send or store it.</p>
              <div className="response-note"><Mail size={21} /><span><strong>Production delivery</strong>Connect an email or form service before public operations.</span></div>
            </div>

            <div className="form-panel">
              {sent && (
                <div className="form-success" role="status">
                  <CheckCircle2 size={20} /><span><strong>Validation complete.</strong> No message was transmitted from this demonstration.</span>
                </div>
              )}
              <form onSubmit={submitForm}>
                <div className="form-row">
                  <label>Full name<input name="name" type="text" autoComplete="name" required placeholder="Your name" /></label>
                  <label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
                </div>
                <label>Topic
                  <select name="topic" value={topic} onChange={(event) => setTopic(event.target.value)}>
                    {contactPaths.map((path) => <option key={path.title}>{path.title}</option>)}
                    <option>Licensing or reuse</option>
                    <option>Accessibility issue</option>
                  </select>
                </label>
                <label>Page or source URL <span>Optional</span><input name="url" type="url" placeholder="https://" /></label>
                <label>Message <span>Minimum 20 characters</span><textarea name="message" required rows={7} placeholder="Identify the page, passage and evidence that would help us review your message." /></label>
                <label className="form-confirm"><input name="confirmation" type="checkbox" required /> <span>I understand this demonstration will not transmit or store my message.</span></label>
                <button className="form-submit" type="submit">Validate message <ArrowUpRight size={18} /></button>
              </form>
            </div>
          </div>
        </section>

        <section className="contact-guidance">
          <div className="page-frame contact-guidance-grid">
            <div><p className="eyebrow light"><span>02</span> Useful detail</p><h2>Make the review easier.</h2></div>
            <div>
              <p><strong>For corrections:</strong> quote the passage, explain the error and link the most authoritative source you have.</p>
              <p><strong>For privacy:</strong> identify the page, the affected information and the action you are requesting.</p>
              <p><strong>For rights:</strong> identify the work, your relationship to it and the specific use at issue.</p>
            </div>
          </div>
        </section>
      </main>
    </InternalShell>
  );
}
