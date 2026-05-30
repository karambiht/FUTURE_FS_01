# Developer Portfolio & API

A full-stack modern developer portfolio website built using React, Tailwind CSS, Express, and MongoDB.

## Features

- **Frontend**: Responsive single-page portfolio with Navbar, Hero, About, Skills, Projects, Resume, and Contact sections.
- **Styling**: Sleek styling with custom dark theme configurations.
- **Backend API**: Node.js & Express server to handle contact form submissions.
- **Database**: MongoDB integration (falls back to standalone logging mode if no connection string is provided).

---

## Getting Started

### 1. Backend Server Setup
Navigate to the `server` directory, install dependencies, and start the backend:

```bash
cd server
npm install
npm run dev
```

*The server will start on `http://localhost:5000`.*

### 2. Frontend Setup
In the root directory, install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

*The web application will open on `http://localhost:5173`.*

---

## Environment Variables

Create a `.env` file inside the `server/` folder to configure your database and port:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

