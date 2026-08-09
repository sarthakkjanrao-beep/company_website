import { companyData } from '../data/company';
import { retrieveContext, retrieveContextSync, isOffTopic } from '../rag/retriever';

// ─── Static structured JSON payloads for Sapraforce ──────────────────────────────
const SERVICES_JSON = JSON.stringify({
    __structured__: true,
    type: 'skills',
    data: {
        categories: [
            { name: 'AI & Automation', icon: '', items: ['Autonomous AI Agents', 'Workflow Automation', 'Enterprise RAG Systems', 'API Connectors'] },
            { name: 'Custom Software', icon: '', items: ['SaaS Web Applications', 'Analytics Dashboards', 'ERP/CRM Integration', 'Custom APIs'] },
            { name: 'Technologies', icon: '', items: ['React.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Supabase'] },
        ],
    },
});

const CONTACT_JSON = JSON.stringify({
    __structured__: true,
    type: 'contact',
    data: {
        phone: companyData.contactInfo.phone,
        email: companyData.contactInfo.email,
        location: companyData.contactInfo.location,
    },
});

const PROOFS_JSON = JSON.stringify({
    __structured__: true,
    type: 'proofs',
    data: {
        linkedin: 'http://www.linkedin.com/in/sapraforce-technologies-a64359428',
        github: '',
        codolio: '',
    },
});

// ─── Intent detection ─────────────────────────────────────────────────────────
type Intent = 'skills' | 'contact' | 'proofs' | 'general';

function detectIntent(msg: string): Intent {
    const m = msg.toLowerCase();
    if (/\b(service|solution|ai agent|automation|custom software|tech stack)\b/.test(m)) return 'skills';
    if (/\b(proof|social|linkedin|twitter|x|links)\b/.test(m)) return 'proofs';
    if (/\b(contact|reach|phone|email|location|pune|whatsapp)\b/.test(m)) return 'contact';
    return 'general';
}

// ─── Response cache ───────────────────────────────────────────────────────────
const responseCache = new Map<string, string>();

function getCacheKey(msg: string): string {
    return msg.trim().toLowerCase().replace(/\s+/g, ' ');
}

// Pre-seed chip button queries
responseCache.set("services & solutions", SERVICES_JSON);
responseCache.set("contact details", CONTACT_JSON);
responseCache.set("social links", PROOFS_JSON);

// ─── Main Chat Generator ──────────────────────────────────────────────────────
export async function generateChatResponse(userMessage: string): Promise<string> {
    const trimmed = userMessage.trim();
    if (!trimmed) return "Hello! How can Sapraforce assist your business today?";

    const cacheKey = getCacheKey(trimmed);
    if (responseCache.has(cacheKey)) {
        return responseCache.get(cacheKey)!;
    }

    if (isOffTopic(trimmed)) {
        return "I can only answer questions about Sapraforce's AI services, business automation solutions, and contact details. How can I help with your project?";
    }

    const intent = detectIntent(trimmed);
    if (intent === 'skills') return SERVICES_JSON;
    if (intent === 'contact') return CONTACT_JSON;
    if (intent === 'proofs') return PROOFS_JSON;

    // Direct Gemini API call if key is present
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
        const context = retrieveContextSync(trimmed);
        return `Sapraforce is a modern AI Engineering & Automation company in Pune, India.\n\nWe build custom AI agents, automated workflow pipelines, and web applications for businesses.\n\nContact us at sapraforce@gmail.com or call +91 9322046379, +91 7350195791.\n\n${context}`;
    }

    try {
        const context = await retrieveContext(trimmed);
        const systemInstruction = `You are the AI Assistant for Sapraforce. Answer questions based on the following company context:\n${context}`;

        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [
                    { role: 'user', parts: [{ text: systemInstruction }] },
                    { role: 'user', parts: [{ text: userMessage }] }
                ]
            })
        });

        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
            responseCache.set(cacheKey, text);
            return text;
        }
    } catch (err) {
        console.error('Gemini error:', err);
    }

    return "Sapraforce specializes in AI Agents, Custom Business Automation, and Web Development. Contact us at sapraforce@gmail.com or +91 9322046379!";
}
