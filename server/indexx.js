const express = require('express');
const cors = require('cors');
const os = require('os');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';
const SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';
const DB_FILE = path.join(__dirname, 'db.json');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

function loadDB() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      const initial = { users: [], projects: [] };
      fs.writeFileSync(DB_FILE, JSON.stringify(initial, null, 2));
      return initial;
    }
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(raw || '{}');
  } catch (e) {
    console.error('Failed to load DB:', e);
    return { users: [], projects: [] };
  }
}

function saveDB(db) {
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}

function generateId(list) {
  return list.length ? Math.max(...list.map(i => i.id)) + 1 : 1;
}

function authenticateToken(req, res, next) {
  const auth = req.headers['authorization'];
  const token = auth && auth.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Missing token' });
  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
}

app.get('/api/ping', (req, res) => {
  res.json({ pong: true });
});

app.post('/api/echo', (req, res) => {
  res.json({ received: req.body });
});

// --- Auth endpoints ---
app.post('/auth/register', (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: 'username and password required' });
  const db = loadDB();
  if (db.users.find(u => u.username === username)) return res.status(409).json({ error: 'User exists' });
  const hashed = bcrypt.hashSync(password, 8);
  const user = { id: generateId(db.users), username, password: hashed };
  db.users.push(user);
  saveDB(db);
  const token = jwt.sign({ id: user.id, username: user.username }, SECRET, { expiresIn: '7d' });
  res.json({ token, user: { id: user.id, username: user.username } });
});

app.post('/auth/login', (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: 'username and password required' });
  const db = loadDB();
  const user = db.users.find(u => u.username === username);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  const ok = bcrypt.compareSync(password, user.password);
  if (!ok) return res.status(401).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ id: user.id, username: user.username }, SECRET, { expiresIn: '7d' });
  res.json({ token, user: { id: user.id, username: user.username } });
});

// --- Projects CRUD (protected) ---
app.get('/api/projects', authenticateToken, (req, res) => {
  const db = loadDB();
  res.json({ projects: db.projects });
});

app.post('/api/projects', authenticateToken, (req, res) => {
  const { title, description } = req.body || {};
  if (!title) return res.status(400).json({ error: 'title required' });
  const db = loadDB();
  const project = { id: generateId(db.projects), title, description: description || '', ownerId: req.user.id, createdAt: new Date().toISOString() };
  db.projects.push(project);
  saveDB(db);
  res.status(201).json(project);
});

app.get('/api/projects/:id', authenticateToken, (req, res) => {
  const id = Number(req.params.id);
  const db = loadDB();
  const p = db.projects.find(x => x.id === id);
  if (!p) return res.status(404).json({ error: 'Not found' });
  res.json(p);
});

app.put('/api/projects/:id', authenticateToken, (req, res) => {
  const id = Number(req.params.id);
  const { title, description } = req.body || {};
  const db = loadDB();
  const idx = db.projects.findIndex(x => x.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const proj = db.projects[idx];
  if (proj.ownerId !== req.user.id) return res.status(403).json({ error: 'Not owner' });
  proj.title = title ?? proj.title;
  proj.description = description ?? proj.description;
  proj.updatedAt = new Date().toISOString();
  db.projects[idx] = proj;
  saveDB(db);
  res.json(proj);
});

app.delete('/api/projects/:id', authenticateToken, (req, res) => {
  const id = Number(req.params.id);
  const db = loadDB();
  const idx = db.projects.findIndex(x => x.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const proj = db.projects[idx];
  if (proj.ownerId !== req.user.id) return res.status(403).json({ error: 'Not owner' });
  db.projects.splice(idx, 1);
  saveDB(db);
  res.json({ ok: true });
});

app.listen(port, host, () => {
  const nets = os.networkInterfaces();
  const addresses = [];
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        addresses.push(net.address);
      }
    }
  }
  console.log(`Server listening on http://${host}:${port}`);
  if (addresses.length) {
    console.log('Accessible on local network at:');
    addresses.forEach(ip => console.log(`  http://${ip}:${port}`));
  }
});
