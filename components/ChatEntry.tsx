export default function ChatEntry({ user, bots }) {
  return (
    <div className="space-y-2">
      <p className="text-right font-medium text-blue-400">You: {user}</p>
      {bots.map((b, i) => (
        <div key={i} className="bg-gray-800 p-3 rounded">
          <p className="text-green-500 font-semibold">{b.name}</p>
          <p>{b.response}</p>
        </div>
      ))}
    </div>
  );
}
