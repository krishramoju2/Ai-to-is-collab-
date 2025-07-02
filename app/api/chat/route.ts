// app/api/chat/route.ts (Enhanced GPT-Style Engine w/ Stylish Display Enhancers)

export async function POST(req: Request) {
  const { input, bots } = await req.json();

  if (!bots || bots.length === 0) {
    return Response.json({
      responses: [
        {
          name: '⚠️ System Notice',
          response: `🚫 Please select at least one bot from the interface to proceed.`
        }
      ]
    });
  }

  const genericIntros = [
    "🔍 Let's explore this:",
    "🧠 Analyzing your query:",
    "💡 Here's a thoughtful insight:",
    "📊 Evaluating based on my field:",
    "🔬 Here's a professional take:",
    "🛰️ Zooming into the context:",
    "🔧 Processing with domain tools:",
    "📘 Informed perspective follows:"
  ];

  const expertiseByBot = {
    cyber: {
      title: "🛡️ Cybersecurity Expert",
      skills: [
        "ethical hacking",
        "malware detection",
        "digital forensics",
        "penetration testing",
        "threat modeling"
      ]
    },
    deepsea: {
      title: "🌊 Deep Sea Marine Scientist",
      skills: [
        "oceanic trench analysis",
        "hydrothermal vent mapping",
        "marine AI swarm robotics",
        "pressure-depth resilience tech",
        "deep sonar imaging"
      ]
    },
    space: {
      title: "🚀 Space Systems Engineer",
      skills: [
        "asteroid redirection",
        "ISS robotics integration",
        "ion propulsion diagnostics",
        "launch protocol logistics",
        "space debris mitigation"
      ]
    },
    stock: {
      title: "📈 Quantitative Financial Strategist",
      skills: [
        "Monte Carlo simulations",
        "hedging risk modeling",
        "derivative valuation",
        "global fiscal metrics",
        "AI-assisted forecasting"
      ]
    }
  };

  function generateResponse(input: string, botKey: string): string {
    const intro = genericIntros[Math.floor(Math.random() * genericIntros.length)];
    const bot = expertiseByBot[botKey];
    const skill = bot.skills[Math.floor(Math.random() * bot.skills.length)];

    const explanation = `“${input}” is a compelling prompt. Drawing from my experience in ${skill}, I'd recommend exploring best practices, real-time tools, and scenario-based frameworks that maximize efficiency and ethics.`;

    return `${intro}\n\n🛠️ Domain: ${skill}\n📥 Input: "${input}"\n📤 Suggestion: ${explanation}`;
  }

  const responses = bots.map((bot: string) => {
    if (!expertiseByBot[bot]) {
      return {
        name: `❓ Unknown Bot (${bot})`,
        response: `⚠️ This bot is not defined in the personality database.`
      };
    }

    return {
      name: expertiseByBot[bot].title,
      response: generateResponse(input, bot)
    };
  });

  return Response.json({ responses });
}
