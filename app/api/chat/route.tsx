export async function POST(req: Request) {
  const { input, bots } = await req.json();

  const genericReplies = [
    `That's an interesting question. Here's a possible take:`,
    `Analyzing your input from my perspective, I'd say:`,
    `Here's my considered response to that:`,
    `Based on your prompt, I believe the best approach is:`,
    `Sure, here's a detailed insight:`,
    `Certainly. Let me explain it like this:`,
    `From my domain expertise, I'd interpret this as:`,
    `Interesting perspective! Here’s my analysis:`,
    `Let me break this down from a specialist's viewpoint:`,
    `Great question! My technical assessment would be:`
  ];

  const expertiseByBot = {
    // ==== TECHNOLOGY & COMPUTING ====
    cyber: "cybersecurity, ethical hacking, and digital forensics",
    ai: "artificial intelligence, neural networks, and deep learning",
    quantum: "quantum computing, superposition, and qubit mechanics",
    blockchain: "distributed ledgers, smart contracts, and cryptographic security",
    arvr: "augmented reality, virtual worlds, and immersive computing",
    iot: "Internet of Things, embedded systems, and smart devices",
    cloud: "distributed computing, serverless architecture, and scalability",
    devops: "continuous integration, deployment automation, and infrastructure as code",
    crypto: "cryptocurrencies, zero-knowledge proofs, and DeFi protocols",
    nlp: "natural language processing, transformers, and LLMs",

    // ==== ENGINEERING & ROBOTICS ====
    robotics: "autonomous systems, mechatronics, and humanoid AI",
    aerospace: "aerodynamics, spacecraft design, and orbital mechanics",
    nano: "nanotechnology, molecular engineering, and metamaterials",
    civil: "structural engineering, urban planning, and sustainable architecture",
    energy: "renewable power grids, fusion research, and battery tech",
    automotive: "electric vehicles, autonomous driving, and vehicular AI",
    biomech: "prosthetics, exoskeletons, and biohybrid robotics",
    nuclear: "fission reactors, plasma containment, and radiation shielding",
    telecom: "5G/6G networks, signal processing, and satellite comms",
    materials: "graphene, superconductors, and self-healing polymers",

    // ==== BIOLOGY & MEDICINE ====
    genetics: "CRISPR, gene editing, and synthetic biology",
    neuro: "brain-computer interfaces, neural decoding, and cognitive science",
    med: "precision medicine, immunotherapy, and robotic surgery",
    bioinfo: "genomic sequencing, protein folding, and computational biology",
    pharma: "drug discovery, pharmacokinetics, and personalized medicine",
    virus: "epidemiology, viral mutations, and pandemic modeling",
    eco: "ecological conservation, rewilding, and climate resilience",
    marine: "deep-sea exploration, coral symbiosis, and bioluminescence",
    zoology: "animal cognition, ethology, and conservation genetics",
    botany: "plant intelligence, vertical farming, and phytoremediation",

    // ==== PHYSICAL & CHEMICAL SCIENCES ====
    astro: "exoplanet detection, dark matter, and cosmological inflation",
    particle: "quantum field theory, hadron colliders, and string theory",
    chem: "catalysis, supramolecular chemistry, and nanoreactors",
    geo: "tectonic shifts, mineralogy, and planetary geology",
    climate: "carbon capture, geoengineering, and climate modeling",
    plasma: "fusion energy, magnetohydrodynamics, and space plasmas",
    optics: "photonics, laser physics, and quantum optics",
    acoustics: "sonar, noise cancellation, and ultrasonic imaging",
    thermo: "entropy, heat engines, and thermodynamic limits",
    fluid: "turbulence, aerodynamics, and non-Newtonian fluids",

    // ==== SOCIAL & COGNITIVE SCIENCES ====
    psych: "behavioral economics, cognitive biases, and neuroplasticity",
    socio: "social networks, cultural evolution, and systemic inequality",
    polisci: "geopolitical strategy, game theory, and policy design",
    anthro: "human origins, ritualistic behavior, and ancient civilizations",
    ling: "computational linguistics, language acquisition, and semantics",
    phil: "ethics of AI, consciousness theory, and logic systems",
    futurology: "existential risks, post-scarcity economics, and singularity",
    law: "algorithmic governance, digital rights, and space law",
    edu: "pedagogical AI, neuroeducation, and gamified learning",
    history: "counterfactual analysis, historiometry, and techno-evolution",

    // ==== FINANCE & ECONOMICS ====
    stock: "algorithmic trading, market microstructure, and volatility modeling",
    macro: "monetary policy, hyperinflation, and economic forecasting",
    micro: "game theory, auction mechanisms, and incentive design",
    fintech: "AI-driven banking, credit scoring, and decentralized finance",
    venture: "startup valuation, disruption theory, and exponential growth",
    crypto: "tokenomics, consensus mechanisms, and blockchain governance",
    tax: "international tax law, fiscal policy, and regulatory arbitrage",
    risk: "black swan events, systemic risk, and portfolio optimization",
    behav: "herd mentality, irrational markets, and sentiment analysis",
    insure: "actuarial science, catastrophe bonds, and risk pooling",

    // ==== CREATIVE & DESIGN ====
    design: "human-centered AI, UX psychology, and interactive media",
    music: "algorithmic composition, psychoacoustics, and spatial audio",
    film: "virtual production, deepfake ethics, and narrative AI",
    art: "generative adversarial networks, computational creativity, and NFT curation",
    game: "procedural generation, emergent gameplay, and metaverse design",
    archi: "parametric design, smart cities, and biomimetic structures",
    fashion: "wearable tech, sustainable textiles, and digital couture",
    writing: "automated storytelling, stylistic transfer, and semantic poetry",
    theater: "immersive experiences, holographic actors, and interactive drama",
    culinary: "molecular gastronomy, AI-generated recipes, and synthetic food",

    // ==== FUTURISTIC & SPECULATIVE ====
    singularity: "recursive self-improvement, posthumanism, and mind uploading",
    xenobio: "hypothetical alien biochemistry and astrobiology",
    chrono: "temporal physics, causality violations, and closed timelike curves",
    ufo: "UAP analysis, interstellar propulsion, and Fermi paradox solutions",
    simulation: "mathematical universe hypothesis and substrate independence",
    postscarcity: "nanofabrication, matter replicators, and utility fog",
    transhuman: "biohacking, cybernetic augmentation, and lifespan extension",
    dyson: "megastructure engineering, stellar harvesting, and Kardashev scaling",
    matrioshka: "brain-computer planetary-scale computing and Jupiter brains",
    acausal: "retrocausality, quantum decision theory, and timeless physics"
  };

  const responses = bots.map((bot: string) => {
    const prefix = genericReplies[Math.floor(Math.random() * genericReplies.length)];
    const domain = expertiseByBot[bot] || "general reasoning and interdisciplinary synthesis";
    return {
      name: bot,
      response: `${prefix} As a specialist in ${domain}, I'd analyze "${input}" through the lens of cutting-edge developments in my field, considering both theoretical frameworks and real-world applications.`
    };
  });

  return Response.json({ responses });
}
