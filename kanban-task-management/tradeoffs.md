# Tradeoffs

## Architecture choices

- I chose React with Vite and Tailwind for fast frontend iteration and polished UI.
- Socket.io was selected for real-time collaboration because it is easy to integrate with Express and offers room-based event delivery.
- I used MongoDB with Mongoose to keep the schema flexible and enable quick iteration for task, board, and project models.

## Simplicity vs completeness

- The current application focuses on the core assignment requirements: auth, CRUD operations, boards, tasks, comments, and real-time updates.
- Advanced features like file attachments, notifications, and activity logs were left out to preserve time and maintain quality.
- This makes the project strong as a portfolio assignment because it delivers the most impactful product features clearly.

## Production readiness

- Docker Compose supports local development with separate backend, frontend, and MongoDB services.
- JWT-based authentication and project membership checks provide secure API access.
- The current app is ready for further production enhancement with validation, pagination, and role-based access control.

## Future improvements

- Add user invitations and role-based permissions.
- Add task filters, due dates, and labels UI.
- Add file uploads and activity history.
- Add frontend form validation and unit tests.
