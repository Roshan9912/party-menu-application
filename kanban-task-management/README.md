# Kanban Task Management

A production-style Kanban task management system built with React, Express, MongoDB, JWT authentication, and Socket.io real-time collaboration.

## Features

- JWT authentication and protected routes
- Project and kanban board management
- Task creation, drag-and-drop workflow, and updates
- Commenting and live updates with Socket.io
- MongoDB data persistence with Mongoose models
- Docker ready with backend and frontend containers

## Project structure

- `backend/` — Express API, Mongoose models, authentication, board/task routes
- `frontend/` — React app with Tailwind UI, drag-and-drop board, auth flow
- `docker-compose.yml` — local dev + production container orchestration
- `architecture.md`, `approach.md`, `tradeoffs.md` — assignment documentation

## Local setup

1. Copy the environment example:

```bash
cp .env.example .env
```

2. Start MongoDB, backend, and frontend with Docker:

```bash
docker compose up --build
```

3. Open the frontend in your browser:

```text
http://localhost:5173
```

## Backend setup

From `backend/`:

```bash
npm install
npm run dev
```

The backend runs on `http://localhost:5000`.

## Frontend setup

From `frontend/`:

```bash
npm install
npm run dev
```

The frontend runs on `http://localhost:5173`.

## API overview

### Authentication

- `POST /api/auth/register` — register a new user
- `POST /api/auth/login` — login and receive JWT
- `GET /api/auth/profile` — get current authenticated user

### Projects

- `GET /api/projects` — list projects for the logged-in user
- `POST /api/projects` — create a new project and default boards
- `GET /api/projects/:id` — load project details, boards, and tasks

### Boards

- `GET /api/boards/:projectId` — list boards for a project
- `POST /api/boards` — create a new board in a project
- `PUT /api/boards/:id` — update a board title or position

### Tasks

- `GET /api/tasks?projectId=...` — list tasks for a project
- `POST /api/tasks` — create a new task
- `PUT /api/tasks/:id` — update task fields or move to another board
- `DELETE /api/tasks/:id` — soft-delete a task
- `GET /api/tasks/:taskId/comments` — list comments for a task
- `POST /api/tasks/comments` — add a comment to a task

## Deployment notes

- Backend uses `JWT_SECRET` and `MONGO_URI` from environment variables.
- Frontend expects `VITE_API_URL` during build to point to backend API.
- Docker Compose builds frontend as a static site served by Nginx.

## Assignment readiness

This repository matches full-stack internship requirements with React, Express, MongoDB, authentication, real-time Socket.io updates, production-style architecture, and comprehensive documentation.
