# Approach

## Goal

Build a production-like Kanban task management system that matches internship requirements with full-stack functionality, developer ergonomics, and clear documentation.

## Strategy

1. Start with a clear project structure.
2. Implement core auth and project APIs first.
3. Add boards, tasks, and comments as key product flows.
4. Build the frontend with a polished UI and live updates.
5. Add Docker support and project documentation.

## Phase breakdown

- Phase 1: Define Mongoose models and API routes for users, projects, boards, tasks, and comments.
- Phase 2: Add JWT auth and protect all project/task endpoints.
- Phase 3: Build a React interface with login/register, dashboard, and kanban board.
- Phase 4: Integrate drag-and-drop with `@hello-pangea/dnd`.
- Phase 5: Add real-time Socket.io updates for team collaboration.
- Phase 6: Dockerize backend, frontend, and MongoDB for a repeatable environment.
- Phase 7: Create documentation files for assignment submission.

## Implementation details

- Use Mongoose models for schema validation and relationships.
- Use reusable access helpers in the backend to enforce project membership.
- Keep frontend API calls centralized in `services/api.js`.
- Use `useEffect` hooks to load project data and subscribe to socket events.
- Maintain simple, responsive UI components with Tailwind CSS.

## Results

The completed system supports:
- Secure user registration and login
- Project creation and team membership support
- Board-based kanban task workflows
- Drag-and-drop task movement
- Real-time updates across clients
- Task comments and task soft-delete semantics
