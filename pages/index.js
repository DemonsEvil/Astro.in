export default function Home() {
  const players = [
    {
      ign: "TAE×VEDANT",
      role: "Assaulter / Filter",
      kd: "4.5",
      wins: 35,
    },
    {
      ign: "TAE×Zod",
      role: "IGL",
      kd: "3.8",
      wins: 28,
    },
    {
      ign: "TAE×DOFF",
      role: "Entry Fragger",
      kd: "4.1",
      wins: 31,
    },
    {
      ign: "TAE×Omegaa",
      role: "Support",
      kd: "3.7",
      wins: 15,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 py-6 font-sans">
      <div className="text-center mb-6">
        <img src="/tae_logo-black.png" alt="TAE Logo" className="mx-auto w-24" />
        <h1 className="text-3xl font-bold text-red-600 mt-4">Astro eSports Team</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {players.map((player, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-red-700 via-black to-yellow-500 rounded-xl p-4 shadow-lg border-2 border-yellow-400"
          >
            <h2 className="text-xl font-semibold text-yellow-300">{player.ign}</h2>
            <p className="text-sm text-red-200 mt-2">Role: {player.role}</p>
            <p className="text-sm text-red-300">KD: {player.kd}</p>
            <p className="text-sm text-yellow-200">Wins: {player.wins}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
