export async function POST(req: Request) {
  const { input, bots } = await req.json();

  const mockResponses = {
    cyber: 'As a cybersecurity expert: update firewalls and check system logs.',
    deepsea: 'As a marine researcher: ocean sensors show increased activity.',
    space: 'As a space advisor: prepare for lunar mission updates.',
    stock: 'As a stock analyst: market is fluctuating around tech news.',
  };

  const responses = bots.map((bot: string) => ({
    name: bot,
    response: `${mockResponses[bot]} (Mocked response to: "${input}")`,
  }));

  return Response.json({ responses });
}
