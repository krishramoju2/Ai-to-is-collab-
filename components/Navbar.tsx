export default function Navbar({ user }) {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-gray-800 rounded-md mb-4">
      <h2 className="text-xl font-semibold">🔐 CareerGPT</h2>
      <span className="text-sm">Welcome, {user.name}</span>
    </nav>
  );
}
