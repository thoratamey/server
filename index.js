import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data
const servers = [
  { id: '1', name: 'Official Server #1', map: 'Operation Locker', players: 62, maxPlayers: 64, ping: 35 },
  { id: '2', name: 'Battlefield Friends', map: 'Siege of Shanghai', players: 45, maxPlayers: 64, ping: 42 },
  { id: '3', name: 'No Explosives', map: 'Golmud Railway', players: 32, maxPlayers: 32, ping: 28 },
  { id: '4', name: 'Rush 24/7', map: 'Paracel Storm', players: 25, maxPlayers: 32, ping: 56 },
  { id: '5', name: 'Hardcore Server', map: 'Zavod 311', players: 55, maxPlayers: 64, ping: 39 },
];

const playerProfile = {
  name: 'SoldierOne',
  rank: 'Colonel',
  level: 75,
  stats: {
    kills: 10567,
    deaths: 8942,
    kd: 1.18,
    wins: 532,
    losses: 498,
    accuracy: 0.24
  }
};

// Routes
app.get('/api/servers', (req, res) => {
  res.json(servers);
});

app.get('/api/servers/:id', (req, res) => {
  const server = servers.find(s => s.id === req.params.id);
  if (!server) {
    return res.status(404).json({ message: 'Server not found' });
  }
  res.json(server);
});

app.get('/api/profile', (req, res) => {
  res.json(playerProfile);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});