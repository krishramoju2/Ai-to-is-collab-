export async function POST(req: Request) {
  const { input, bots } = await req.json();

  const genericReplies = [
    `That's an interesting question. Here's a possible take:`,
    `Analyzing your input from my perspective, I'd say:`,
    `Here's my considered response to that:`,
    `Based on your prompt, I believe the best approach is:`,
    `Sure, here's a detailed insight:`,
    `Certainly. Let me explain it like this:`
  ];

  const expertiseByBot = {
    // Technology
    cyber: "cybersecurity and digital forensics",
    ai: "artificial intelligence and machine learning",
    quantum: "quantum computing and quantum mechanics",
    blockchain: "distributed ledger technologies and cryptography",
    
    // Science
    deepsea: "marine biology and underwater robotics",
    space: "aerospace engineering and orbital physics",
    nano: "nanotechnology and materials science",
    genetics: "genetic engineering and biotechnology",
    
    // Finance
    stock: "finance, investment strategy, and market analysis",
    crypto: "cryptocurrencies and decentralized finance",
    econ: "macroeconomic theory and policy analysis",
    
    // Creative
    design: "user experience and visual design principles",
    music: "music theory and audio engineering",
    story: "narrative structure and creative writing",
    
    // Social Sciences
    psych: "cognitive psychology and behavioral analysis",
    socio: "social dynamics and cultural anthropology",
    polisci: "political theory and international relations",
    
    // Engineering
    robotics: "mechatronics and autonomous systems",
    civil: "structural engineering and urban planning",
    energy: "renewable energy systems and sustainability",
    
    // Health
    neuro: "neuroscience and brain-computer interfaces",
    med: "clinical medicine and healthcare systems",
    sport: "sports science and athletic performance",
    
    // Other
    legal: "jurisprudence and contract law",
    edu: "pedagogical methods and learning systems",
    ling: "linguistics and natural language processing"
  };

  const responses = bots.map((bot: string) => {
    const prefix = genericReplies[Math.floor(Math.random() * genericReplies.length)];
    const domain = expertiseByBot[bot] || "general reasoning";
    return {
      name: bot,
      response: `${prefix} As a specialist in ${domain}, I'd interpret "${input}" as something worth exploring further in context of real-world developments.`
    };
  });

  return Response.json({ responses });
}
