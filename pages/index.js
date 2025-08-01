export default function Home() {
  const players = [
    { ign: "TAE×VEDANT", role: "Assaulter / Filter", kd: 4.3, Mvp's: 21 },
    { ign: "TAE×Zod", role: "IGL", kd: 3.9, Mvp's: 17 },
    { ign: "TAE×DOFF", role: "Entry Fragger", kd: 4.1, Mvp's: 19 },
    { ign: "TAE×Omegaa", role: "Support", kd: 3.5, Mvp's: 15 }
  ];

  return (
    <div className="min-h-screen bg-dark p-6">
      <div className="text-center mb-6">
        <img src="/tae-logo-black.png" alt="TAE Logo" className="mx-auto w-32" />
        <h1 className="text-3xl font-bold text-primary mt-4">Astro eSports</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {players.map((player, index) => (
          <div key={index} className="border border-secondary rounded-2xl p-4 bg-black shadow-md">
            <h2 className="text-xl text-secondary font-semibold">{player.ign}</h2>
            <p>Role: {player.role}</p>
            <p>K/D: {player.kd}</p>
            <p>Wins: {player.wins}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
