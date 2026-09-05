/** ARCHIVAL SIGNAL — plain-language editorial and legal copy with visible scope and dates. */
export type PageSection = {
  id: string;
  title: string;
  paragraphs: string[];
  points?: string[];
};

export type EditorialDocument = {
  title: string;
  shortTitle: string;
  kicker: string;
  summary: string;
  effective: string;
  notice?: string;
  sections: PageSection[];
};

const effectiveDate = "5 September 2026";

export const documents: Record<string, EditorialDocument> = {
  privacy: {
    title: "Privacy Policy",
    shortTitle: "Privacy",
    kicker: "Legal file 01",
    effective: effectiveDate,
    summary: "This policy explains what information the Factora demonstration may receive, why it is used and the choices available to visitors.",
    notice: "Demonstration notice: this policy describes the current static prototype and should be reviewed by qualified counsel before a production launch.",
    sections: [
      {
        id: "scope",
        title: "Scope of this policy",
        paragraphs: ["This policy applies to the Factora Journal website and the pages published under the same operator. It does not govern third-party websites, source documents or services reached through external links."],
      },
      {
        id: "information",
        title: "Information we may receive",
        paragraphs: ["The current contact form is a static demonstration: it validates entries in your browser but does not transmit or store the name, email address, topic or message you enter."],
        points: ["Basic technical request data processed by the hosting provider, such as IP address, browser type, requested page and request time.", "Aggregate usage measurements when site analytics are enabled.", "Information you voluntarily send through a future production contact channel, if one is connected and clearly identified."],
      },
      {
        id: "use",
        title: "How information is used",
        paragraphs: ["Technical and aggregate information may be used to operate the site, maintain security, understand page performance and improve accessibility. We do not use the static demonstration to build advertising profiles or sell personal information."],
      },
      {
        id: "sharing",
        title: "Sharing and service providers",
        paragraphs: ["Information may be processed by infrastructure providers that host, secure or measure the site. A production operator may also disclose information when required by law, to protect rights and safety, or as part of a legitimate organizational transfer. Factora does not authorize providers to use submitted information for their own advertising."],
      },
      {
        id: "retention",
        title: "Retention and security",
        paragraphs: ["Because the demonstration contact form does not submit data, Factora retains no form entries. Infrastructure logs and analytics, if enabled, follow the retention and security settings of the relevant provider. No internet service can promise absolute security."],
      },
      {
        id: "choices",
        title: "Your choices and rights",
        paragraphs: ["Depending on where you live, you may have rights to request access, correction, deletion, restriction or a copy of personal information. You may also control cookies and similar storage through your browser. The contact page identifies the appropriate request category for a future production channel."],
      },
      {
        id: "children",
        title: "Children",
        paragraphs: ["Factora is a general-audience reference publication and is not designed to collect personal information from children. If a production operator learns that information was collected from a child contrary to applicable requirements, it should be reviewed and removed."],
      },
      {
        id: "changes",
        title: "Changes and questions",
        paragraphs: ["Material updates will be reflected by a revised effective date. Privacy questions or rights requests can be started through the Contact page; the current prototype will explain that delivery is not yet connected."],
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    shortTitle: "Terms",
    kicker: "Legal file 02",
    effective: effectiveDate,
    summary: "These terms set the ground rules for accessing and using Factora Journal and its source-conscious editorial material.",
    notice: "Demonstration notice: these terms are a general website template, not jurisdiction-specific legal advice. Review and complete them before production use.",
    sections: [
      {
        id: "acceptance",
        title: "Acceptance",
        paragraphs: ["By accessing the site, you agree to these terms and the policies linked from them. If you do not agree, do not use the site. The production operator should identify its legal name and jurisdiction before public launch."],
      },
      {
        id: "editorial",
        title: "Editorial nature of the service",
        paragraphs: ["Factora publishes reference profiles, research notes and contextual material for general informational purposes. Publication does not imply endorsement, affiliation or approval by any documented person or entity."],
      },
      {
        id: "permitted-use",
        title: "Permitted use",
        paragraphs: ["You may read, link to and quote limited portions of the site for lawful purposes with appropriate attribution. You may not interfere with site operation, evade access controls, misrepresent Factora content or use automated means in a way that materially burdens the service."],
      },
      {
        id: "intellectual-property",
        title: "Intellectual property",
        paragraphs: ["Original site design, selection, organization and editorial text are protected to the extent permitted by law. Third-party names, marks, quotations and source materials remain the property of their respective owners and may be used for identification, reporting, criticism or other lawful purposes."],
      },
      {
        id: "submissions",
        title: "Corrections and submissions",
        paragraphs: ["If you submit a correction, source or message through a connected production channel, you confirm that you may provide it. You grant the operator permission to review, verify and use the submission for editorial purposes, without an obligation to publish it or keep it confidential unless agreed in writing."],
      },
      {
        id: "external",
        title: "External sources and links",
        paragraphs: ["Factora links to source material for transparency. External sites are controlled by others; their availability, accuracy, security and privacy practices are not guaranteed by Factora."],
      },
      {
        id: "warranties",
        title: "No warranties",
        paragraphs: ["The site is provided on an “as available” basis. Factora aims for careful sourcing but does not warrant that every page is complete, current or error-free. Open questions, later records and good-faith mistakes may affect a profile."],
      },
      {
        id: "liability",
        title: "Limitation and changes",
        paragraphs: ["To the extent permitted by applicable law, the operator will not be liable for indirect or consequential losses arising from use of the site. The production version should add governing-law, dispute and operator details appropriate to its jurisdiction. Updated terms apply from the date shown above."],
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    shortTitle: "Cookies",
    kicker: "Legal file 03",
    effective: effectiveDate,
    summary: "This page describes browser storage and measurement technologies that may support the Factora website.",
    notice: "The present editorial pages do not intentionally set marketing cookies. Hosting, analytics or embedded services may change the final production posture.",
    sections: [
      {
        id: "what",
        title: "What cookies are",
        paragraphs: ["Cookies are small text records placed in a browser by a website or service provider. Related technologies include local storage, pixels and server-side measurement. They can support core functions, remember choices or measure use."],
      },
      {
        id: "current-use",
        title: "Current use",
        paragraphs: ["The Factora static demonstration does not include advertising, account login or a cookie preference system. Basic hosting and aggregate analytics may still process technical request information. If production features begin storing optional identifiers, this policy and the interface should be updated before activation."],
      },
      {
        id: "categories",
        title: "Possible categories",
        points: ["Strictly necessary technologies that deliver pages, balance traffic or prevent abuse.", "Preference storage that remembers an explicit visitor choice.", "Analytics measurement used to understand aggregate visits and performance.", "Third-party media or tools, only if clearly added to a production page."],
        paragraphs: ["Factora does not use the current demonstration for behavioral advertising."],
      },
      {
        id: "controls",
        title: "Your controls",
        paragraphs: ["Most browsers allow you to inspect, block or delete cookies and site data. Blocking essential storage may affect some functions. Privacy extensions and device settings may provide additional controls."],
      },
      {
        id: "changes",
        title: "Updates and contact",
        paragraphs: ["This policy will be revised if the technology stack or purpose of measurement changes. Use the Privacy & rights category on the Contact page for questions about browser storage."],
      },
    ],
  },
  disclaimer: {
    title: "Editorial Disclaimer",
    shortTitle: "Disclaimer",
    kicker: "Legal file 04",
    effective: effectiveDate,
    summary: "Factora provides independently assembled reference material, not professional advice or an official record of the entities it covers.",
    notice: "No named entity profile is published in the current pre-publication edition. Collection descriptions show the intended editorial model only.",
    sections: [
      {
        id: "information",
        title: "General information only",
        paragraphs: ["Content is provided for general reference, education and reporting. It is not legal, medical, financial, investment, safety or other professional advice, and it should not replace an appropriate qualified adviser or authoritative record."],
      },
      {
        id: "accuracy",
        title: "Accuracy and change",
        paragraphs: ["Factora seeks to connect claims with sources and context. Sources can contain errors, records can change and reasonable interpretations can differ. No profile should be treated as exhaustive, permanently current or guaranteed error-free."],
      },
      {
        id: "sources",
        title: "Third-party material",
        paragraphs: ["A link, quotation or citation identifies relevant material; it does not mean Factora controls or endorses the source. Rights in third-party material remain with the relevant owner."],
      },
      {
        id: "independence",
        title: "Independence and affiliation",
        paragraphs: ["Unless explicitly stated, Factora is not affiliated with, sponsored by or officially connected to the people, institutions, places, events or works it documents. Their names and marks are used for identification and editorial reference."],
      },
      {
        id: "reliance",
        title: "Reliance and corrections",
        paragraphs: ["You are responsible for how you use the information. Important decisions should be checked against current primary or authoritative records. Suspected errors can be reported through the Corrections page."],
      },
    ],
  },
  editorial: {
    title: "Editorial Policy",
    shortTitle: "Editorial policy",
    kicker: "Editorial file 01",
    effective: effectiveDate,
    summary: "Our editorial policy describes how subjects are selected, claims are handled and independence is protected.",
    sections: [
      { id: "mission", title: "Mission", paragraphs: ["Factora makes documented public information easier to understand without turning uncertainty into certainty. Profiles should add context, show provenance and give readers a clear route back to the record."] },
      { id: "selection", title: "Subject selection", paragraphs: ["Subjects are selected for documented public significance, useful context or a meaningful record beyond routine directory information. Inclusion is not an award, accusation or endorsement."] },
      { id: "independence", title: "Editorial independence", paragraphs: ["Documented entities do not approve profiles before publication. Sponsorship, gifts or commercial relationships must not determine conclusions. Material conflicts should be disclosed and managed."] },
      { id: "verification", title: "Verification and fairness", paragraphs: ["Material claims should be mapped to identifiable sources, represented in context and checked against other available records. Serious disputed claims require proportionate care and a meaningful opportunity for response when appropriate."] },
      { id: "attribution", title: "Attribution and first-party claims", paragraphs: ["First-party statements are labelled as such. Quotations are kept proportionate, and summaries should not imply that a source says more than it does."] },
      { id: "updates", title: "Updates and corrections", paragraphs: ["Profiles are reviewed when reliable new information appears. Substantive corrections should be visible to readers rather than silently hidden. The Corrections Policy explains the review path."] },
    ],
  },
  sources: {
    title: "Source Policy",
    shortTitle: "Source policy",
    kicker: "Editorial file 02",
    effective: effectiveDate,
    summary: "This policy explains which sources Factora prefers, how first-party material is labelled and how unresolved evidence is handled.",
    sections: [
      { id: "hierarchy", title: "Source hierarchy", paragraphs: ["Preference is given to authoritative public records, original documents, credible independent reporting and relevant scholarship. The best source depends on the claim: a statute may establish a legal fact, while independent reporting may establish context or response."] },
      { id: "first-party", title: "First-party material", paragraphs: ["Institutional websites, biographies, press releases and interviews can establish what an entity says about itself. They are identified as first-party sources and are not treated as independent confirmation of disputed or evaluative claims."] },
      { id: "secondary", title: "Independent and secondary sources", paragraphs: ["Reputable reporting, academic publications and specialist references can connect events, test claims and provide context. Editorial reputation alone does not remove the need to read the underlying item carefully."] },
      { id: "anonymous", title: "Anonymous and user-supplied material", paragraphs: ["Anonymous assertions, social posts and user submissions are leads, not automatic evidence. Publication requires additional verification appropriate to the claim and risk."] },
      { id: "archives", title: "Archives and link preservation", paragraphs: ["Where practical, citations should identify author or institution, title, date and access path. Archived copies may be used to preserve access, while respecting legitimate restrictions and removals."] },
      { id: "gaps", title: "Conflicts and open questions", paragraphs: ["When credible sources conflict, the disagreement is described and attributed. If a consequential claim cannot be verified, it remains an open item rather than being published as fact."] },
    ],
  },
  methodology: {
    title: "Research Methodology",
    shortTitle: "Methodology",
    kicker: "Editorial file 03",
    effective: effectiveDate,
    summary: "A transparent sequence for turning a subject into a sourced, readable and maintainable reference profile.",
    sections: [
      { id: "scope", title: "1. Define the scope", paragraphs: ["The researcher identifies the entity, the public-interest purpose of the file, likely ambiguities and the time period that the profile must cover."] },
      { id: "discovery", title: "2. Discover the record", paragraphs: ["Research begins broadly across public records, institutional material, credible reporting, archives and scholarship. Searches are recorded so that important gaps and naming variants are visible."] },
      { id: "mapping", title: "3. Map claims to sources", paragraphs: ["Each material statement is separated into a checkable claim and connected to the source that supports it. A source is not cited for a claim it does not actually establish."] },
      { id: "verification", title: "4. Verify and contextualize", paragraphs: ["Dates, names, roles, quotations and consequential assertions are cross-checked where proportionate. First-party claims, disputed accounts and unresolved questions receive explicit labels."] },
      { id: "writing", title: "5. Write for the reader", paragraphs: ["Profiles lead with the most useful context, avoid promotional or accusatory language and make the path to sources clear. Compression must not distort meaning."] },
      { id: "review", title: "6. Review and publish", paragraphs: ["Before publication, the file is checked for source fit, internal consistency, fair framing, link quality and avoidable privacy risk. Publication records the review date."] },
      { id: "maintenance", title: "7. Maintain the record", paragraphs: ["Credible corrections and new records are reviewed after publication. Significant changes should be dated, and substantive errors should leave a visible correction note."] },
    ],
  },
  corrections: {
    title: "Corrections Policy",
    shortTitle: "Corrections",
    kicker: "Editorial file 04",
    effective: effectiveDate,
    summary: "Corrections are part of the record. This policy explains how to report a concern and how Factora distinguishes updates from errors.",
    sections: [
      { id: "report", title: "Report a concern", paragraphs: ["Use the Contact page and select “Correction or source update.” Identify the page, quote the relevant passage, explain the issue and include the strongest available source. Clear, specific reports can be reviewed more efficiently."] },
      { id: "review", title: "Review process", paragraphs: ["A correction request is assessed against the cited source, the article’s existing evidence and any additional authoritative material. Factora may ask for clarification and does not accept a subject’s preference as proof by itself."] },
      { id: "levels", title: "Correction levels", points: ["Typographic fixes that do not change meaning may be corrected directly.", "Clarifications add context where the original wording was accurate but incomplete or open to misunderstanding.", "Substantive corrections change a material error and should carry a dated note.", "Updates add reliable later developments without implying that the earlier text was wrong."], paragraphs: [] },
      { id: "visibility", title: "Visible record", paragraphs: ["A substantive correction should identify what changed and when. The goal is accountability without repeating unnecessary harmful detail."] },
      { id: "response", title: "Response expectations", paragraphs: ["Urgent safety or privacy concerns should be identified clearly. The demonstration edition does not operate a monitored inbox; production response targets must be published once a contact service is connected."] },
    ],
  },
  about: {
    title: "About Factora",
    shortTitle: "About",
    kicker: "About the journal",
    effective: "Pre-publication edition · 2026",
    summary: "Factora is a design demonstration for an independent reference journal built around sources, context and visible correction.",
    sections: [
      { id: "purpose", title: "Why Factora exists", paragraphs: ["Public information is often scattered across records, institutional pages, reporting and archives. Factora’s model brings those pieces into a readable profile while preserving the route back to each kind of evidence."] },
      { id: "not", title: "What it is not", paragraphs: ["Factora is not an official registry, a directory, a reputation service or an encyclopedia mirror. Inclusion does not imply endorsement or wrongdoing, and a profile is not a substitute for the underlying record."] },
      { id: "principles", title: "Editorial principles", points: ["Sources should be visible and accurately represented.", "First-party statements should be labelled.", "Uncertainty should be stated rather than smoothed over.", "Substantive corrections should remain visible.", "Documented entities should not control the conclusions."], paragraphs: [] },
      { id: "edition", title: "About this edition", paragraphs: ["The current site is a pre-publication demonstration with no published entity profiles and no connected submission backend. It presents the design, collection taxonomy, research methodology and editorial-policy framework for a future publication serving readers in the United States and Europe."] },
    ],
  },
};
