export const company = {
  name: "DC SERVICE, LDA",
  shortName: "DC SERVICE",
  tagline: "Integrated business solutions for organizations demanding excellence.",
  description:
    "DC SERVICE, LDA is a multidisciplinary Mozambican company, dedicated to providing corporate solutions in consulting, technology, cybersecurity, logistics, procurement, human resources, accounting, and international trade.",
  phones: [
    { label: "Mozambique", value: "+258 86 301 3135", tel: "+258863013135" },
    { label: "Mozambique", value: "+258 85 301 3335", tel: "+258853013335" },
    { label: "South Africa", value: "+27 64 912 4839", tel: "+27649124839" },
  ],
  emails: [
    { label: "General", value: "geral@dcservice.co.mz" },
    { label: "Management", value: "dchongole@dcservice.co.mz" },
  ],
  whatsapp: "258863013135",
  address: "Maputo, Mozambique",
  hours: "Monday to Friday · 08h00 – 17h00",
  social: {
    facebook: "https://www.facebook.com/share/18ncAQUUVu/",
    instagram: "https://www.instagram.com/dc_service_lda?igsh=YTQxNTRsdGZ2eWFm",
  },
} as const;

export const stats = [
  { value: 10, suffix: "+", label: "Areas of expertise" },
  { value: 50, suffix: "+", label: "Corporate clients" },
  { value: 15, suffix: " years", label: "Accumulated experience" },
  { value: 98, suffix: "%", label: "Retention rate" },
] as const;

export const pillars = [
  {
    title: "Operational rigor",
    text: "Auditable processes, clear SLAs, and measurable delivery in all projects.",
  },
  {
    title: "Multidisciplinary",
    text: "A single partner for consulting, technology, logistics, HR, and international trade.",
  },
  {
    title: "Confidentiality",
    text: "Information security policies and NDAs by default in every engagement.",
  },
  {
    title: "Regional presence",
    text: "Operations in Mozambique with cross-border execution capabilities in the SADC.",
  },
] as const;

export const processSteps = [
  { n: "01", title: "Diagnosis", text: "Executive session to map objectives, constraints, and success criteria." },
  { n: "02", title: "Proposal", text: "Structured work plan with timeline, deliverables, and investment." },
  { n: "03", title: "Execution", text: "Dedicated team, weekly milestones, and transparent communication." },
  { n: "04", title: "Sustainment", text: "Knowledge transfer and post-delivery support." },
] as const;

export const testimonials = [
  {
    quote:
      "DC SERVICE has become an extension of our operation. They meet deadlines, communicate clearly, and anticipate problems.",
    author: "Finance Department",
    role: "Industrial Group · Maputo",
  },
  {
    quote:
      "They combine technical IT competence with a business vision rarely found in the local market.",
    author: "CTO",
    role: "Regional Fintech",
  },
  {
    quote:
      "The international procurement they manage for us is impeccable — documentation, deadlines, and costs always under control.",
    author: "Operations Director",
    role: "Civil Construction",
  },
];

export const faqs = [
  {
    question: "How does the initial consulting process work?",
    answer: "Our process begins with a free diagnostic session, where we map your objectives, constraints, and success criteria. Next, we present a structured value proposition with a clear timeline and deliverables, ensuring total alignment before moving forward."
  },
  {
    question: "Does DC Service serve companies outside of Maputo?",
    answer: "Yes. Although our headquarters is in Maputo, we have the capacity to execute and monitor projects throughout the national territory, as well as cross-border operations in the SADC region."
  },
  {
    question: "Can you integrate multiple services into a single contract?",
    answer: "Absolutely. This is our biggest competitive advantage. We can bundle, for example, IT infrastructure, procurement, and accounting into a single Service Level Agreement (SLA), simplifying your vendor management."
  },
  {
    question: "How do you guarantee the confidentiality of our data?",
    answer: "Confidentiality is the pillar of our operation. We sign Non-Disclosure Agreements (NDAs) by default at the beginning of any engagement and apply rigorous information security policies in handling your data."
  }
] as const;
