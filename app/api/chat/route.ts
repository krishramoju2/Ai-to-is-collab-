// app/api/chat/route.ts (Enhanced Offline GPT-Like Engine)

export async function POST(req: Request) {
  const { input, bots } = await req.json();

  // Fallback in case no bots selected
  if (!bots || bots.length === 0) {
    return Response.json({
      responses: [
        {
          name: 'system',
          response: `Please select at least one bot to receive a response.`
        }
      ]
    });
  }

  const genericIntros = [
    "Let's break this down:",
    "Analyzing this logically:",
    "Here's a thought-provoking insight:",
    "My analysis on this is as follows:",
    "A comprehensive perspective would be:",
    "Delving into this, I’d suggest:",
    "From my professional standpoint, here’s what I think:",
    "If we explore this further, we might say:"
  ];

  const expertiseByBot = {
    cyber: {
      title: "🛡️ Cybersecurity Expert",
      skills: [
        "network security",
        "ethical hacking",
        "malware detection",
        "digital forensics",
        "penetration testing"
      ]
    },
    deepsea: {
      title: "🌊 Marine Researcher",
      skills: [
        "submersible operations",
        "marine ecosystems",
        "ocean current modeling",
        "deep sea archaeology",
        "marine robotics"
      ]
    },
    space: {
      title: "🚀 Space Exploration Advisor",
      skills: [
        "orbital mechanics",
        "planetary science",
        "satellite operations",
        "astrophysics",
        "international space law"
      ]
    },
    stock: {
      title: "📈 Financial Analyst",
      skills: [
        "quantitative modeling",
        "market trend analysis",
        "risk assessment",
        "portfolio optimization",
        "global economic strategy"
      ]
    }
  };

  function generateResponse(input: string, botKey: string): string {
    const intro = genericIntros[Math.floor(Math.random() * genericIntros.length)];
    const bot = expertiseByBot[botKey];
    const skill = bot.skills[Math.floor(Math.random() * bot.skills.length)];

    const exampleResponse = `“${input}” is a great question. Drawing from my expertise in ${skill}, I would recommend considering both practical tools and strategic frameworks that align with current trends. Make sure to also factor in the ethical, technical, and long-term impacts of your decision.`;

    return `${intro} ${exampleResponse}`;
  }

  const responses = bots.map((bot: string) => {
    if (!expertiseByBot[bot]) {
      return {
        name: bot,
        response: `This bot is not recognized in the system.`
      };
    }

    return {
      name: expertiseByBot[bot].title,
      response: generateResponse(input, bot)
    };
  });

  return Response.json({ responses });
}
