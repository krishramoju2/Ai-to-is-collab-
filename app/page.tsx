'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import BotSelector from '@/components/BotSelector';
import ChatEntry from '@/components/ChatEntry';
import TypingLine from '@/components/TypingLine';

export default function HomePage() {
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const [activeBots, setActiveBots] = useState<string[]>([]);
  const [typing, setTyping] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser({ name: 'Test User' });
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    setChatHistory(prev => [...prev, { user: input, bots: [] }]);
    setTyping(true);

    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ input, bots: activeBots }),
    });

    const data = await res.json();

    setChatHistory(prev => {
      const updated = [...prev];
      updated[updated.length - 1].bots = data.responses;
      return updated;
    });

    setTyping(false);
    setInput('');
  };

  if (!user) {
    return <main className="p-8 text-center text-white">Loading...</main>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4 sm:px-6 py-8">
      <Navbar user={user} />
      <section className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-extrabold text-center mb-4">
          🧠 Multi-Career Chatbot Terminal
        </h1>

        <BotSelector activeBots={activeBots} setActiveBots={setActiveBots} />

        <div className="space-y-6">
          {chatHistory.map((entry, idx) => (
            <ChatEntry key={idx} {...entry} />
          ))}
          {typing && <TypingLine />}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <input
            className="flex-grow p-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:ring focus:border-blue-500 transition"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Ask your question..."
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 text-white rounded-lg font-medium shadow"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </section>
    </main>
  );
}
