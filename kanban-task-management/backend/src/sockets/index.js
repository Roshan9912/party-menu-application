const registerSocketHandlers = (io) => {
  io.on('connection', (socket) => {
    socket.on('joinProject', (projectId) => {
      socket.join(projectId);
    });

    socket.on('taskUpdated', (payload) => {
      io.to(payload.project).emit('taskUpdated', payload);
    });

    socket.on('commentAdded', (payload) => {
      io.to(payload.project).emit('commentAdded', payload);
    });
  });
};

module.exports = registerSocketHandlers;
