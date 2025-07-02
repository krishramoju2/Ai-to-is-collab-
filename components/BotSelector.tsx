export default function BotSelector({ activeBots, setActiveBots }) {
  const bots = [
    { name: 'cyber', label: '🛡️ Cybersecurity' },
    { name: 'deepsea', label: '🌊 Deep Sea' },
    { name: 'space', label: '🚀 Space' },
    { name: 'stock', label: '📈 Stock Market' },
  ];

  const toggleBot = name =>
    setActiveBots(prev =>
      prev.includes(name) ? prev.filter(b => b !== name) : [...prev, name]
    );

  return (
    <div className="flex flex-wrap gap-2">
      {bots.map(bot => (
        <button
          key={bot.name}
          onClick={() => toggleBot(bot.name)}
          className={`px-3 py-1 rounded transition ${
            activeBots.includes(bot.name)
              ? 'bg-green-600 hover:bg-green-500'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          {bot.label}
        </button>
      ))}
    </div>
  );
}
