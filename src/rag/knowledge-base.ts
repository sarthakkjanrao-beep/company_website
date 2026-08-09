/**
 * RAG Knowledge Base — Sapraforce Company Knowledge
 * Contains structured facts about Sapraforce services, contact details, and solutions.
 */

export interface KnowledgeChunk {
    id: string;
    tags: string[];   // keywords for retrieval matching
    text: string;     // the actual text sent to the LLM
}

export const knowledgeBase: KnowledgeChunk[] = [
    // ── COMPANY OVERVIEW ──────────────────────────────────────────────────────
    {
        id: 'company-overview',
        tags: ['who', 'about', 'sapraforce', 'bio', 'introduction', 'background', 'company', 'services'],
        text: `Sapraforce is a modern AI Engineering & Business Automation company headquartered in Pune, India.
We specialize in building autonomous AI Agents, custom business automation systems, API connectors, and modern control dashboards.
Our mission is to streamline complex operations, eliminate manual bottlenecks, and give businesses 100% control over their digital workflows.`,
    },

    // ── CONTACT INFORMATION ──────────────────────────────────────────────────
    {
        id: 'contact-info',
        tags: ['contact', 'phone', 'mobile', 'whatsapp', 'call', 'reach', 'email', 'location', 'pune', 'address', 'headquarters'],
        text: `Sapraforce Contact Information:
• Email: sapraforce@gmail.com
• Phone: +91 9322046379, +91 7350195791
• WhatsApp Direct: https://wa.me/919322046379 or https://wa.me/917350195791
• Headquarters: Pune, Maharashtra, India
• LinkedIn: http://www.linkedin.com/in/sapraforce-technologies-a64359428
• Twitter / X: https://x.com/sapraforce`,
    },

    // ── CORE SERVICES ────────────────────────────────────────────────────────
    {
        id: 'services-overview',
        tags: ['service', 'solution', 'ai agent', 'automation', 'software', 'web app', 'dashboard', 'api', 'capabilities'],
        text: `Sapraforce Services & Solutions:
1. Autonomous AI Agents: Intelligently handle customer support, lead routing, document processing, and task execution.
2. Custom Business Automation: End-to-end integration across CRM, ERP, databases, and custom APIs.
3. Custom Software Development: Tailor-made web applications, real-time analytics dashboards, and cloud microservices.
4. Custom Web Applications: Responsive, modern web applications built with React, Vite, and glassmorphism design.`,
    },

    // ── SYSTEM PROMPT / INSTRUCTIONS ──────────────────────────────────────────
    {
        id: 'system-prompt',
        tags: ['system', 'instruction', 'prompt', 'rules', 'role', 'assistant', 'whoareyou'],
        text: `You are the official AI Assistant for Sapraforce.
Your job is to assist visitors by explaining Sapraforce's services, answering questions about custom automation and AI Agents, and encouraging them to book a 30-min strategy call or contact sapraforce@gmail.com.
Always maintain a helpful, professional tone.`,
    },
];
