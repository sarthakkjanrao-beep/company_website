export interface SolutionItem {
    id: string;
    title: string;
    description: string;
    icon: string;
    tag: string;
    features: string[];
    metrics: string;
}

export interface WorkflowStep {
    step: string;
    title: string;
    description: string;
    details: string;
}

export interface PartnerLogo {
    name: string;
    category: string;
    symbol: string;
}

export const companyData = {
    name: 'SapraForce AI',
    initials: 'SF',
    tagline: 'Real-World AI Solutions & Enterprise Business Automation',
    subheadline: 'We design, deploy, and scale autonomous AI agents and visual workflow automation pipelines that eliminate repetitive manual work, cut operational costs by up to 70%, and run 24/7 with enterprise-grade reliability.',
    trustHeadline: 'Trusted by 100+ forward-thinking startups & enterprise teams',

    stats: [
        { label: 'Cost Reduction', value: '70%', suffix: 'Avg. Savings' },
        { label: 'Execution Speed', value: '10x', suffix: 'Faster Workflows' },
        { label: 'Process Accuracy', value: '99.8%', suffix: 'Zero Error Rate' },
        { label: 'Autonomous Uptime', value: '24/7', suffix: 'Continuous Ops' },
    ],

    typingCapabilities: [
        'Autonomous AI Agents & Swarms',
        'Visual Business Process Pipelines',
        'Enterprise Knowledge RAG Systems',
        'Intelligent ERP & CRM Integrations',
        'Automated Document Processing',
    ],

    heroCards: [
        {
            id: 'ai-agents',
            title: 'Autonomous AI Agents',
            badge: 'LIVE AGENT SWARM',
            desc: 'Multi-agent coordination that receives tickets, calls APIs, resolves issues, and notifies teams autonomously.',
            highlight: '99.8% Task Execution Accuracy',
            icon: 'Cpu',
            color: '#d4a64f',
        },
        {
            id: 'workflow-engine',
            title: 'Visual Workflow Pipelines',
            badge: 'MAKE / N8N ARCHITECTURE',
            desc: 'Drag-and-drop enterprise integrations bridging legacy ERPs, CRMs, webhooks, and modern LLM models seamlessly.',
            highlight: 'Over 1,000+ App Connectors',
            icon: 'GitBranches',
            color: '#aa3bff',
        },
        {
            id: 'enterprise-rag',
            title: 'Enterprise RAG Systems',
            badge: 'SECURE KNOWLEDGE ENGINE',
            desc: 'Ground your AI in your company data—PDFs, SQL databases, Notion, and Slack—with strict privacy controls.',
            highlight: 'Zero Data Hallucination Guardrails',
            icon: 'Database',
            color: '#3b82f6',
        },
    ],

    partners: [
        { name: 'OpenAI', category: 'LLM Core', symbol: '🤖' },
        { name: 'Anthropic', category: 'Claude 3.5', symbol: '🧠' },
        { name: 'n8n', category: 'Workflow Automation', symbol: '⚡' },
        { name: 'Make.com', category: 'Visual Integration', symbol: '🔌' },
        { name: 'Salesforce', category: 'CRM Sync', symbol: '☁️' },
        { name: 'LangChain', category: 'Agent Swarms', symbol: '🔗' },
        { name: 'Pinecone', category: 'Vector Search', symbol: '🌲' },
        { name: 'PostgreSQL', category: 'Data Infrastructure', symbol: '🐘' },
        { name: 'AWS', category: 'Cloud Security', symbol: '☁️' },
        { name: 'Zapier', category: 'App Connectivity', symbol: '💥' },
    ],

    services: [
        {
            id: 'custom-agents',
            title: 'Custom AI Agent Engineering',
            description: 'Autonomous digital workers designed to execute specialized business tasks—from processing invoices to handling complex multi-tier customer inquiries.',
            icon: 'Bot',
            tag: 'Autonomous Systems',
            features: [
                'Multi-Agent Coordination & Swarm Logic',
                'Human-in-the-Loop Approval Workflows',
                'Custom Tool Calling & External API Triggers',
                'Self-Healing Error Handling Protocols',
            ],
            metrics: 'Save 30+ Hours / Week Per Ops Specialist',
        },
        {
            id: 'process-automation',
            title: 'Visual Business Process Automation',
            description: 'End-to-end automated pipelines that synchronize your sales, operations, finance, and customer service applications without fragile manual data entry.',
            icon: 'Zap',
            tag: 'Workflow Engineering',
            features: [
                'Real-Time Webhook & API Synchronization',
                'Legacy Database to Cloud CRM Migration',
                'Custom Node Development in n8n & Make',
                'Automated Exception Alerts via Slack/Teams',
            ],
            metrics: '10x Acceleration in Process Turnaround',
        },
        {
            id: 'enterprise-rag',
            title: 'Enterprise RAG & Search Systems',
            description: 'Turn your internal documentation, SOPs, contracts, and customer interaction logs into an intelligent, instant-response company intelligence engine.',
            icon: 'Search',
            tag: 'Data Intelligence',
            features: [
                'Hybrid Vector & Keyword Search Engine',
                'Role-Based Data Access & Permission Scoping',
                'Automated PDF, Doc, and Email Ingestion',
                'Private On-Prem or Isolated Cloud Deployment',
            ],
            metrics: 'Instant Retrieval Across Millions of Records',
        },
        {
            id: 'ai-consulting',
            title: 'AI Strategy & Architecture Audit',
            description: 'Comprehensive business process audit to pinpoint high-ROI automation opportunities, architect enterprise AI stacks, and guarantee measurable cost reductions.',
            icon: 'Briefcase',
            tag: 'Strategic Advisory',
            features: [
                'Full Business Process Bottleneck Audit',
                'Custom AI Architecture & Tech Stack Blueprint',
                'Security, Compliance & Data Governance Review',
                'Dedicated SLA & Continuous Model Optimization',
            ],
            metrics: 'Guaranteed 3x-5x ROI Within 90 Days',
        },
    ],

    workflows: [
        {
            department: 'Operations & Logistics',
            icon: 'Truck',
            title: 'Automated Supply Chain & Inventory Dispatch',
            before: 'Manual CSV file exports, copy-pasting tracking numbers, and delayed email updates taking 15+ hours weekly.',
            after: 'AI Agent listens to warehouse updates, verifies inventory via SQL, auto-generates dispatch documents, and alerts client managers on Slack.',
            nodes: ['Email/Webhook Received', 'AI Invoice Extractor', 'ERP Database Update', 'Slack & Email Dispatch'],
            timeSavings: '92% Reduction in Processing Time',
        },
        {
            department: 'Sales & CRM Lead Routing',
            icon: 'TrendingUp',
            title: 'Instant Lead Enrichment & Smart Booking Agent',
            before: 'Inbound web forms sitting in inbox for hours before SDR outreach, leading to lost deals and cold prospects.',
            after: 'Real-time AI Lead Qualifier enriches lead data from LinkedIn/Apollo, scores buyer intent, and books calendar calls automatically.',
            nodes: ['Webform Submission', 'AI Intent Enrichment', 'Lead Scoring Model', 'Cal.com Booking Trigger'],
            timeSavings: 'Inbound Response Time reduced from 4 Hours to 15 Seconds',
        },
        {
            department: 'Customer Support',
            icon: 'Headphones',
            title: '24/7 Autonomous Tier-1 Support Resolution',
            before: 'Support agents overloaded with repetitive account queries, refund requests, and password resets.',
            after: 'Enterprise RAG Bot answers complex technical queries accurately with zero hallucinations, resolving 65% of tickets automatically.',
            nodes: ['Zendesk Ticket Created', 'Vector RAG Knowledge Check', 'Policy Guardrail Validator', 'Auto-Resolution Response'],
            timeSavings: '65% Tickets Resolved without Human Agent Intervention',
        },
        {
            department: 'Finance & Accounts',
            icon: 'DollarSign',
            title: 'Intelligent Accounts Payable & Reconciliation',
            before: 'Accounts team manually auditing vendor PDF invoices against purchase orders in Excel and SAP.',
            after: 'Vision AI extracts line items, validates tax numbers, checks PO matches, and posts approved payments into Xero/QuickBooks.',
            nodes: ['Vendor PDF Ingestion', 'Vision LLM Data Extraction', 'PO Matching Algorithm', 'ERP Accounting Post'],
            timeSavings: 'Zero Manual Data Entry & 100% Tax Accuracy',
        },
    ],

    contactInfo: {
        email: 'contact@sapraforce.ai',
        phone: '+1 (800) 555-AI-FORCE',
        location: 'San Francisco, CA & Global Engineering Hub',
        calendarLink: 'https://cal.com',
    }
};
