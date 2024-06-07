
import React, { useEffect, useState } from 'react';
import Leaderboard from './components/Leaderboard';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/stats/leaderboard')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App">
      <h1>Clash Royale Clan Wars Leaderboard</h1>
      <Leaderboard data={data} />
    </div>
  );
}

export default App;
