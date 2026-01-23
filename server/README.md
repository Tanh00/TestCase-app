# app-qly-server

Minimal Express API for the app-qly React Native app.

## Install

From the `server` folder run:

```powershell
cd server
npm install
```

## Run

```powershell
npm start
```

Server runs on `http://localhost:3000` by default and is now bound to all interfaces for LAN access.

If you want the server accessible from other devices on your network, start it normally (it binds to `0.0.0.0` by default):

```powershell
cd server
npm install
npm start
```

The server will print LAN addresses like `http://192.168.x.y:3000` — use one of those from your phone or device.

If you prefer to bind to a specific host, set the `HOST` environment variable (example: bind only to localhost):

```powershell
$env:HOST='127.0.0.1'; npm start
```

## Endpoints

- `GET /api/ping` — health check
- `POST /api/echo` — returns posted JSON
- `GET /api/projects` — example data

Auth & Projects API
- `POST /auth/register` — body `{ "username": "..", "password": ".." }` returns `{ token, user }`
- `POST /auth/login` — body `{ "username": "..", "password": ".." }` returns `{ token, user }`
- `GET /api/projects` — protected, requires `Authorization: Bearer <token>`
- `POST /api/projects` — protected, body `{ title, description }` to create project
- `GET /api/projects/:id` — protected
- `PUT /api/projects/:id` — protected, update project (owner only)
- `DELETE /api/projects/:id` — protected, delete project (owner only)

## Example fetch from app

```js
fetch('http://<YOUR_MACHINE_IP>:3000/api/ping')
  .then(r => r.json())
  .then(console.log)
```

Note: On a physical device replace `localhost` with your machine IP shown when the server starts.

## Quick test page

A simple test page is served at the server root. After starting the server open `http://<YOUR_MACHINE_IP>:3000/` in a browser (or `http://localhost:3000/` on the machine) to call the example endpoints from the page.
