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
