export default function ChatEntry({ user, bots }) {
  return (
    <div className="space-y-3">
      <div className="text-right text-blue-300 font-medium">
        <span className="bg-gray-800 px-3 py-2 rounded-full inline-block">
          🙋 You: {user}
        </span>
      </div>
      {bots.map((b, i) => (
        <div
          key={i}
          className="backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-xl shadow-md transition-all duration-300"
        >
          <div className="font-semibold text-green-400 text-sm mb-1">
            {formatBotTitle(b.name)}
          </div>
          <p className="text-gray-200 leading-relaxed">{b.response}</p>
        </div>
      ))}
    </div>
  );
}

function formatBotTitle(name: string) {
  switch (name) {
    case 'cyber':
      return '🛡️ Cybersecurity Specialist';
    case 'deepsea':
      return '🌊 Marine Biologist';
    case 'space':
      return '🚀 Space Systems Engineer';
    case 'stock':
      return '📈 Financial Analyst';
    default:
      return '🤖 AI Bot';
  }
}
