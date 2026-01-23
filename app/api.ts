// Simple API helper for calling your external web API
// - Edit `BASE` below to point to your server (use machine IP for device testing)
// - Example usage is shown in the comments at the bottom

let BASE = 'http://localhost:3000';  //change to http://192.168.x.y:3000 on physical device

export function setBase(url: string) {
  BASE = url.replace(/\/$/, '');
}

async function request(path: string, opts: any = {}) {
  const res = await fetch(`${BASE}${path}`, opts);
  const text = await res.text();
  try { const json = JSON.parse(text); if (!res.ok) throw { status: res.status, body: json }; return json; } catch (e) { if (!res.ok) throw { status: res.status, body: text }; return text; }
}

export const auth = {
  async register(username: string, password: string) {
    return request('/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
  },
  async login(username: string, password: string) {
    return request('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
  }
};

export const projects = {
  async list(token?: string) {
    return request('/api/projects', { headers: token ? { Authorization: `Bearer ${token}` } : {} });
  },
  async create(data: { title: string; description?: string }, token: string) {
    return request('/api/projects', {
      method: 'POST',
      headers: Object.assign({ 'Content-Type': 'application/json' }, token ? { Authorization: `Bearer ${token}` } : {}),
      body: JSON.stringify(data),
    });
  }
};

// -----------------------------
// Example usage (in your React / React Native code):

/*
import { setBase, auth, projects } from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

// set base to your machine IP when testing on device
setBase('http://192.168.1.10:3000');

// login and save token
const res = await auth.login('you', 'pass');
const token = res.token; // save to AsyncStorage
await AsyncStorage.setItem('token', token);

// later call protected endpoint
const t = await AsyncStorage.getItem('token');
const list = await projects.list(t);
*/

export default { setBase, auth, projects };
