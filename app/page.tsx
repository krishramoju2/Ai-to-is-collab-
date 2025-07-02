'use client';

import { useState, useEffect } from 'react';
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
    setUser({ name: 'Test User' }); // Simulated login
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    setChatHistory(prev => [...prev, { user: input, bots: [] }]);
    setTyping(true);

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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

  if (!user) return <main className="p-8 text-white">Loading...</main>;

  return (
    <main className="p-4 sm:p-8 space-y-4 max-w-3xl mx-auto">
      <Navbar user={user} />
      <h1 className="text-3xl font-bold text-center">🧠 Career Chatbot Terminal</h1>
      <BotSelector activeBots={activeBots} setActiveBots={setActiveBots} />
      <div className="space-y-4">
        {chatHistory.map((entry, idx) => (
          <ChatEntry key={idx} {...entry} />
        ))}
        {typing && <TypingLine />}
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          className="flex-grow p-2 bg-gray-800 rounded"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button className="bg-blue-600 px-4 py-2 rounded" onClick={handleSend}>
          Send
        </button>
      </div>
    </main>
  );
}
