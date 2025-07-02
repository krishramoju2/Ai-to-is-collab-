export default function BotSelector({ activeBots, setActiveBots }) {
  const bots = [
    { name: 'cyber', label: '🛡️ Cybersecurity' },
    { name: 'deepsea', label: '🌊 Deep Sea' },
    { name: 'space', label: '🚀 Space' },
    { name: 'stock', label: '📈 Stock Market' },
  ];

  const toggleBot = (name: string) => {
    setActiveBots(prev =>
      prev.includes(name) ? prev.filter(b => b !== name) : [...prev, name]
    );
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center py-4">
      {bots.map(bot => (
        <button
          key={bot.name}
          onClick={() => toggleBot(bot.name)}
          className={`px-4 py-2 font-semibold rounded-full transition duration-300
            ${
              activeBots.includes(bot.name)
                ? 'bg-gradient-to-r from-green-400 to-blue-500 shadow-lg text-white'
                : 'bg-gray-800 hover:bg-gray-700 text-gray-200'
            }`}
        >
          {bot.label}
        </button>
      ))}
    </div>
  );
}
