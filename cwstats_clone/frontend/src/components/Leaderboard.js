
import React from 'react';

function Leaderboard({ data }) {
  return (
    <div>
      <h2>Top Clans</h2>
      <ul>
        {data.map(clan => (
          <li key={clan._id}>
            {clan.name} - {clan.score} points
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
