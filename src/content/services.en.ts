import {
  Briefcase,
  Cpu,
  ShieldCheck,
  ClipboardList,
  Calculator,
  Users,
  Truck,
  PackageSearch,
  Handshake,
  Ship,
  type LucideIcon,
} from "lucide-react";

import imgMateriais from "../assets/service_materiais.jpg";
import imgInformatica from "../assets/service_informatica.jpg";
import imgCiber from "../assets/service_ciber.jpg";
import imgConsultoria from "../assets/service_consultoria.jpg";
import imgContabilidade from "../assets/service_contabilidade.jpg";
import imgRh from "../assets/service_rh.jpg";
import imgLogistica from "../assets/service_logistica.jpg";
import imgProcurement from "../assets/service_procurement.jpg";
import imgParcerias from "../assets/service_parcerias.jpg";
import imgImportacao from "../assets/service_importacao.jpg";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  image: string;
  intro: string;
  description: string;
  problems: string[];
  benefits: string[];
  how: { title: string; text: string }[];
  methodology: string[];
  differentiators: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "materiais-escritorio",
    title: "Office Supplies and Consumables",
    short:
      "Continuous supply of office materials and consumables for organizations of any size.",
    icon: Briefcase,
    image: imgMateriais,
    intro:
      "We simplify your team's daily supply with a curated catalog, predictable deadlines, and centralized billing.",
    description:
      "We take full responsibility for managing your organization's office consumables: paper, ink cartridges, stationery, furniture, and technical material. We work with framework contracts that guarantee stable prices, scheduled deliveries, and automatic replenishment based on minimum levels defined with you.",
    problems: [
      "Frequent shortages of essential materials",
      "Purchases dispersed across multiple suppliers",
      "Costs difficult to control and audit",
      "Lack of quality standardization",
    ],
    benefits: [
      "Zero disruption in your daily operations",
      "Significant reduction in total cost of ownership (TCO)",
      "Single monthly invoice for all consumables",
      "Guaranteed premium quality for all items",
    ],
    how: [
      { title: "Audit", text: "We analyze your historical consumption and identify waste." },
      { title: "Cataloging", text: "We define a restricted and approved list of products." },
      { title: "Supply", text: "Scheduled or on-demand deliveries within SLA." },
    ],
    methodology: [
      "Inventory consumption analysis",
      "Definition of minimum stock levels",
      "Establishment of SLA for deliveries",
      "Quarterly cost review",
    ],
    differentiators: [
      "Direct partnerships with global manufacturers",
      "Emergency delivery capability within 4 hours in Maputo",
      "Platform for centralized order approval",
    ],
    faqs: [
      {
        q: "Do you supply customized technological equipment?",
        a: "Yes. In addition to standard consumables, we supply ergonomic furniture and corporate IT equipment."
      },
      {
        q: "How does centralized billing work?",
        a: "We consolidate all your monthly orders into a single invoice, with detailed reports by department or cost center."
      }
    ]
  },
  {
    slug: "material-informatico",
    title: "IT Equipment and Corporate Networks",
    short: "Sourcing, configuration, and implementation of corporate IT infrastructure.",
    icon: Cpu,
    image: imgInformatica,
    intro: "End-to-end technological infrastructure for modern companies. From servers to end-user workstations.",
    description: "We don't just sell computers. We design, supply, and implement robust technological infrastructures. Whether setting up a new office, migrating to the cloud, or upgrading legacy hardware, the DC SERVICE team ensures that your technology serves your business smoothly.",
    problems: [
      "Obsolete hardware slowing down productivity",
      "Incompatible or undersized networks",
      "Lack of technical support after purchase",
      "Difficulty in licensing management",
    ],
    benefits: [
      "Turn-key infrastructure ready to use",
      "Maximum performance for critical operations",
      "Scalability guaranteed for future growth",
      "Full warranty and specialized support",
    ],
    how: [
      { title: "Assessment", text: "Mapping of current topology and bottlenecks." },
      { title: "Sourcing", text: "Procurement of enterprise-grade equipment." },
      { title: "Rollout", text: "Configuration, installation, and user training." },
    ],
    methodology: [
      "Requirements gathering per user profile",
      "Network design and capacity planning",
      "Staging and pre-configuration",
      "Implementation with zero downtime",
    ],
    differentiators: [
      "Certified partners of major tech brands",
      "Leasing and Hardware-as-a-Service (HaaS) models",
      "Specialized in high-availability environments",
    ],
    faqs: [
      {
        q: "Do you offer equipment leasing?",
        a: "Yes. We offer Operational Leasing models (HaaS) so you can keep your technology updated without CAPEX."
      },
      {
        q: "Do you provide ongoing IT support?",
        a: "Yes. We have managed service contracts (MSP) for preventative and reactive support."
      }
    ]
  },
  {
    slug: "ciberseguranca",
    title: "Cybersecurity and Information Protection",
    short: "Defending your digital assets against modern threats and ensuring compliance.",
    icon: ShieldCheck,
    image: imgCiber,
    intro: "Proactive security is not a luxury, it's survival. We protect your data, your reputation, and your continuity.",
    description: "In an environment of escalating digital threats, we offer a comprehensive approach to cybersecurity. From vulnerability auditing to the implementation of Next-Gen Firewalls, Endpoint Protection (EDR), and security awareness training for your employees. We align your infrastructure with international standards (ISO 27001).",
    problems: [
      "Exposure to ransomware and data leaks",
      "Lack of visibility over the network",
      "Employees falling for phishing attacks",
      "Non-compliance with data protection laws",
    ],
    benefits: [
      "Total mitigation of critical risks",
      "Real-time monitoring 24/7",
      "Business continuity in disaster scenarios",
      "Regulatory and legal compliance",
    ],
    how: [
      { title: "Audit", text: "Penetration testing and vulnerability scanning." },
      { title: "Hardening", text: "Implementation of technical controls and zero-trust." },
      { title: "Monitoring", text: "Continuous surveillance and incident response." },
    ],
    methodology: [
      "Security posture assessment",
      "Architecture of defense in depth",
      "Implementation of SIEM/SOC",
      "Disaster Recovery Planning (DRP)",
    ],
    differentiators: [
      "Certified ethical hackers on staff",
      "Locally adapted threat intelligence",
      "Focus on both technology and human behavior",
    ],
    faqs: [
      {
        q: "What is a Penetration Test?",
        a: "It's a controlled simulation of a cyberattack to identify vulnerabilities in your systems before malicious hackers do."
      },
      {
        q: "Do you help with data privacy laws compliance?",
        a: "Yes, we align your technical and organizational controls with the local Data Protection Law and GDPR."
      }
    ]
  },
  {
    slug: "consultoria",
    title: "Management Consulting",
    short: "Strategic direction and operational optimization for sustainable growth.",
    icon: ClipboardList,
    image: imgConsultoria,
    intro: "We transform complex challenges into clear strategies and measurable execution.",
    description: "Our consulting practice focuses on solving the most complex problems of our clients. Whether restructuring operations, defining go-to-market strategies, or digital transformation, we bring deep analytical rigor combined with a pragmatic understanding of the Mozambican market.",
    problems: [
      "Stagnant growth or loss of market share",
      "Inefficient and costly internal processes",
      "Lack of alignment between strategy and execution",
      "Difficulty in adapting to digital changes",
    ],
    benefits: [
      "Clear strategic roadmap with defined KPIs",
      "Significant operational efficiency gains",
      "Data-driven decision making",
      "Cultural alignment and change management",
    ],
    how: [
      { title: "Discovery", text: "Deep dive into your data, processes, and market." },
      { title: "Strategy", text: "Co-creation of the solution and implementation plan." },
      { title: "Execution", text: "Hands-on support during the transition phase." },
    ],
    methodology: [
      "Market and competitor analysis",
      "Process mapping (BPMN)",
      "Financial modeling and scenario planning",
      "Change management frameworks",
    ],
    differentiators: [
      "Consultants with real industry experience, not just theory",
      "We stay for the execution, we don't just leave a report",
      "Deep local market intelligence",
    ],
    faqs: [
      {
        q: "How long does a typical consulting project last?",
        a: "Depending on the scope, a strategic diagnosis takes 3-4 weeks, while a full operational restructuring can take 3-6 months."
      },
      {
        q: "Do you implement the software tools you recommend?",
        a: "Yes. Our technology division works hand-in-hand with consulting to implement any digital solutions recommended."
      }
    ]
  },
  {
    slug: "contabilidade",
    title: "Accounting and Tax Services",
    short: "Rigor, compliance, and financial intelligence for your business.",
    icon: Calculator,
    image: imgContabilidade,
    intro: "Beyond compliance: we turn your accounting data into a strategic asset.",
    description: "We provide comprehensive accounting, tax planning, and payroll services. Our goal is to ensure absolute compliance with Mozambican tax authorities while providing management with timely, accurate financial reports (dashboards, cash flow analysis) to support strategic decisions.",
    problems: [
      "Fines and penalties due to missed tax deadlines",
      "Lack of visibility into real company profitability",
      "Disorganized document management",
      "Complex and error-prone payroll processing",
    ],
    benefits: [
      "Zero tax contingencies",
      "Monthly management reports for decision making",
      "Optimized tax burden through legal planning",
      "Confidential and accurate payroll",
    ],
    how: [
      { title: "Onboarding", text: "Setup of accounting systems and chart of accounts." },
      { title: "Processing", text: "Monthly bookkeeping, tax filing, and payroll." },
      { title: "Reporting", text: "Delivery of financial statements and management dashboards." },
    ],
    methodology: [
      "Digital document collection and archiving",
      "Reconciliation and analytical accounting",
      "Tax compliance checklist and internal audit",
      "Periodic financial review meetings",
    ],
    differentiators: [
      "Use of modern cloud accounting software",
      "Proactive tax alerts and legislative updates",
      "Dedicated account manager for your business",
    ],
    faqs: [
      {
        q: "Do you handle the entire year-end closing?",
        a: "Yes, we handle the full cycle: from daily bookkeeping to the Annual Income Tax Return (M/22) and Financial Statements."
      },
      {
        q: "Can you manage accounting for foreign companies operating in Mozambique?",
        a: "Yes, we are specialists in supporting foreign investors, ensuring compliance with local laws and reporting to headquarters."
      }
    ]
  },
  {
    slug: "recursos-humanos",
    title: "Human Resources Management",
    short: "Recruitment, training, and strategic talent management.",
    icon: Users,
    image: imgRh,
    intro: "Finding, developing, and retaining the best talent in the market.",
    description: "People are the ultimate differentiator. DC SERVICE offers end-to-end HR solutions: from executive search and mass recruitment to performance evaluation systems, climate surveys, and customized corporate training programs.",
    problems: [
      "High turnover of key personnel",
      "Difficulty in finding specialized technical profiles",
      "Lack of structured performance metrics",
      "Labor law compliance risks",
    ],
    benefits: [
      "Access to a curated pool of top talent",
      "Reduction in time-to-hire",
      "Motivated and aligned workforce",
      "Full compliance with the Mozambican Labor Law",
    ],
    how: [
      { title: "Sourcing", text: "Targeted headhunting and rigorous screening." },
      { title: "Development", text: "Training programs and career path definition." },
      { title: "Administration", text: "Contracts, disciplinary processes, and compliance." },
    ],
    methodology: [
      "Competency-based interviewing",
      "Psychometric and technical testing",
      "360-degree performance evaluations",
      "Labor compliance audits",
    ],
    differentiators: [
      "Specialized tech and executive recruitment",
      "In-house legal counsel for labor issues",
      "Customized e-learning platforms",
    ],
    faqs: [
      {
        q: "Do you provide temporary staffing (Outsourcing)?",
        a: "Yes. We offer labor outsourcing services, managing the entire legal and payroll burden for temporary or project-based teams."
      },
      {
        q: "How do you guarantee the quality of candidates?",
        a: "Through a rigorous multi-stage filtering process, including background checks, technical assessments, and behavioral interviews."
      }
    ]
  },
  {
    slug: "logistica",
    title: "Logistics and Transport",
    short: "Efficient movement of goods across Mozambique and the region.",
    icon: Truck,
    image: imgLogistica,
    intro: "Reliability and speed in your supply chain, from origin to final destination.",
    description: "We orchestrate complex logistics operations. Whether it's last-mile delivery in urban centers, heavy cargo transport to remote mining sites, or warehousing solutions, we guarantee that your goods arrive safely, on time, and within budget.",
    problems: [
      "Delays and unpredictability in deliveries",
      "Damage or loss of goods in transit",
      "High logistics overhead costs",
      "Lack of tracking and visibility",
    ],
    benefits: [
      "Guaranteed transit times (SLAs)",
      "End-to-end visibility of your cargo",
      "Optimized routing reducing transport costs",
      "Total peace of mind with comprehensive insurance",
    ],
    how: [
      { title: "Planning", text: "Route optimization and load consolidation." },
      { title: "Execution", text: "Dispatch, tracking, and secure transport." },
      { title: "Delivery", text: "Proof of delivery and reverse logistics if needed." },
    ],
    methodology: [
      "Fleet management and telemetry",
      "Risk assessment for remote routes",
      "Just-in-time delivery models",
      "Warehousing and cross-docking",
    ],
    differentiators: [
      "Experience in complex project logistics (Mining, Oil & Gas)",
      "Real-time GPS tracking available to clients",
      "Rigorous health, safety, and environment (HSE) standards",
    ],
    faqs: [
      {
        q: "Do you transport hazardous materials?",
        a: "Yes, we have certified vehicles and trained drivers for the transport of Dangerous Goods (Hazmat)."
      },
      {
        q: "Do you offer warehousing services?",
        a: "Yes, we provide secure warehousing and inventory management solutions in key logistics nodes."
      }
    ]
  },
  {
    slug: "procurement",
    title: "Strategic Procurement",
    short: "Sourcing and supply chain optimization for operational efficiency.",
    icon: PackageSearch,
    image: imgProcurement,
    intro: "We buy better, faster, and smarter on your behalf.",
    description: "We act as your extended purchasing department. We manage the entire procure-to-pay cycle: vendor qualification, global sourcing, negotiation, and contract management. We specialize in finding hard-to-source technical equipment and reducing overall spend through strategic category management.",
    problems: [
      "Overpaying for goods and services",
      "Unreliable suppliers causing operational delays",
      "Lack of transparency and fraud risks in purchasing",
      "Time wasted managing hundreds of small vendors",
    ],
    benefits: [
      "Immediate cost savings through our negotiated rates",
      "Consolidation of vendors (one point of contact)",
      "Guaranteed quality and compliance of all goods",
      "Transparent and auditable procurement process",
    ],
    how: [
      { title: "Sourcing", text: "Global market scanning and RFI/RFP management." },
      { title: "Negotiation", text: "Securing best price, terms, and warranties." },
      { title: "Fulfillment", text: "Purchase order management and delivery tracking." },
    ],
    methodology: [
      "Total Cost of Ownership (TCO) analysis",
      "Supplier risk assessment and due diligence",
      "Strategic category management",
      "Procurement automation",
    ],
    differentiators: [
      "Global network of verified manufacturers",
      "Zero-tolerance policy for compliance and ethics",
      "Capacity to finance operations (Trade Finance)",
    ],
    faqs: [
      {
        q: "How do you charge for procurement services?",
        a: "We work on a transparent margin basis or a fixed management fee, depending on the volume and nature of the contract."
      },
      {
        q: "Can you source specialized industrial equipment?",
        a: "Yes. We have dedicated buyers for IT, construction, mining, and healthcare sectors."
      }
    ]
  },
  {
    slug: "parcerias",
    title: "Strategic Partnerships and Representation",
    short: "Representing global brands and facilitating local joint ventures.",
    icon: Handshake,
    image: imgParcerias,
    intro: "Your trusted local partner for entering and expanding in the Mozambican market.",
    description: "For international companies looking to enter Mozambique, DC SERVICE acts as a reliable local partner. We offer commercial representation, navigate local regulatory frameworks, facilitate Joint Ventures, and provide the local content required for large-scale projects.",
    problems: [
      "Lack of local market knowledge and networks",
      "Difficulty in meeting Local Content requirements",
      "Navigating complex bureaucratic and legal hurdles",
      "Finding trustworthy local partners",
    ],
    benefits: [
      "Rapid go-to-market in Mozambique",
      "Full compliance with local content laws",
      "Access to established government and corporate networks",
      "Reduced operational and reputational risk",
    ],
    how: [
      { title: "Feasibility", text: "Market research and regulatory mapping." },
      { title: "Setup", text: "Legal incorporation, licensing, and office setup." },
      { title: "Growth", text: "Business development and commercial representation." },
    ],
    methodology: [
      "Deep stakeholder mapping",
      "Regulatory compliance auditing",
      "Go-to-market strategy execution",
      "Local capacity building",
    ],
    differentiators: [
      "Impeccable ethical track record",
      "Multidisciplinary team to handle legal, HR, and sales",
      "Strong relationships with key economic sectors",
    ],
    faqs: [
      {
        q: "Can you act as a formal distributor for our products?",
        a: "Yes, we act as exclusive distributors and authorized service centers for several global brands."
      },
      {
        q: "Do you assist with securing investment licenses?",
        a: "Yes, we handle the entire process with APIEX and other regulatory bodies."
      }
    ]
  },
  {
    slug: "importacao-exportacao",
    title: "Import & Export (Customs Clearing)",
    short: "Seamless cross-border trade and customs brokerage.",
    icon: Ship,
    image: imgImportacao,
    intro: "Navigating customs bureaucracy so your cargo doesn't stop moving.",
    description: "We simplify international trade. Our licensed customs brokers handle all documentation, tariff classification, and duties calculation for both imports and exports. We ensure your cargo clears customs quickly, avoiding expensive demurrage and storage fees at ports and borders.",
    problems: [
      "Cargo stuck at customs due to incorrect documentation",
      "Unexpected costs (demurrage, fines, hidden fees)",
      "Lack of updates on cargo clearance status",
      "Complex tariff classifications",
    ],
    benefits: [
      "Fast and compliant customs clearance",
      "Predictable landed costs for your goods",
      "Single point of contact for freight and clearing",
      "Elimination of port storage penalties",
    ],
    how: [
      { title: "Pre-clearance", text: "Document review before cargo arrives." },
      { title: "Processing", text: "Submission to customs (Janela Única) and payment of duties." },
      { title: "Release", text: "Physical inspection assistance and cargo dispatch." },
    ],
    methodology: [
      "Rigorous pre-shipment documentation check",
      "Correct HS Code classification",
      "Optimization of tax benefits and exemptions",
      "Real-time status tracking",
    ],
    differentiators: [
      "In-house licensed customs clearing agents (Despachantes)",
      "Integration with our transport division for door-to-door service",
      "Experience with complex project exemptions (Investment Law)",
    ],
    faqs: [
      {
        q: "Can you handle Door-to-Door shipments?",
        a: "Yes, by combining our freight forwarding, customs clearing, and logistics divisions, we offer true door-to-door solutions."
      },
      {
        q: "Do you assist in obtaining import/export licenses?",
        a: "Yes, we assist in registering your company as a legal importer/exporter in Mozambique."
      }
    ]
  }
];
