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
    <div>
      <img src="/tae_logo-black.png" className="logo" alt="TAE Logo" />
      <h1>Astro eSports Team</h1>
      <div>
        {players.map((player, index) => (
          <div key={index} className="player-card">
            <div className="player-title">{player.ign}</div>
            <div className="player-role">Role: {player.role}</div>
            <div>KD: {player.kd}</div>
            <div>Wins: {player.wins}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

