# Architecture

## Overview

This Kanban task management application follows a modern full-stack architecture with a React frontend and Express/MongoDB backend.

- Frontend: React, Tailwind CSS, Vite, Socket.io client
- Backend: Express, Mongoose, JWT authentication, Socket.io server
- Database: MongoDB with normalized collections for users, projects, boards, tasks, and comments
- Deployment: Docker Compose for local development and production-like environment

## Key Layers

### Frontend

- `src/App.jsx` uses React Router to manage authentication and protected routes.
- `AuthContext.jsx` provides global auth state and token handling.
- Pages:
  - `AuthPage.jsx` handles login/register
  - `DashboardPage.jsx` lists user projects and creates new projects
  - `BoardPage.jsx` implements a draggable kanban board, task creation, and comments

### Backend

- `app.js` configures middleware, CORS, and API routing.
- `server.js` starts the HTTP server and initializes Socket.io.
- `config/database.js` connects to MongoDB using environment variables.
- `middleware/auth.js` validates JWTs and attaches the user to requests.
- `controllers/` implement business logic and enforce authorization.
- `routes/` define REST API endpoints.
- `models/` define Mongoose schemas for core entities.

## Database Model Relationships

- `User` owns and participates in `Project`
- `Project` contains `Board`
- `Board` contains `Task`
- `Task` can have `Comment`

## Realtime Flow

1. A client opens a board and joins a Socket.io room for the project.
2. When a task is moved or a comment is added, the event is emitted.
3. Other clients in the same project room receive updates instantly.

## Security

- Authentication via JWT stored in frontend `localStorage`.
- Protected routes validated by `protect` middleware.
- Authorization checks ensure only project members can access project data.
- Task updates require membership in the associated project.
