// Fully offline mock logic using Pages Router (Vercel-ready)

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { input, bots } = req.body;

  if (!bots || bots.length === 0) {
    return res.status(400).json({
      responses: [{
        name: '⚠️ System Notice',
        response: '🚫 Please select at least one bot.'
      }]
    });
  }

  const intros = [
    "🔍 Let's explore this:",
    "🧠 Analyzing your query:",
    "💡 Insight ahead:"
  ];

  const botProfiles = {
    cyber: {
      title: "🛡️ Cybersecurity Expert",
      skills: ["network defense", "ethical hacking", "malware analysis"]
    },
    deepsea: {
      title: "🌊 Marine Biologist",
      skills: ["trench mapping", "sonar data analysis"]
    },
    space: {
      title: "🚀 Space Scientist",
      skills: ["orbital navigation", "lunar geology"]
    },
    stock: {
      title: "📈 Stock Analyst",
      skills: ["AI-driven forecasting", "technical indicators"]
    }
  };

  const responses = bots.map((bot: string) => {
    const profile = botProfiles[bot] || { title: "🤖 Generalist", skills: ["analysis"] };
    const intro = intros[Math.floor(Math.random() * intros.length)];
    const skill = profile.skills[Math.floor(Math.random() * profile.skills.length)];
    return {
      name: profile.title,
      response: `${intro}\n🛠️ Skillset: ${skill}\n📤 Based on "${input}", here's an offline suggestion.`
    };
  });

  res.status(200).json({ responses });
}
