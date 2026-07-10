import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import api from '../services/api';
import { io } from 'socket.io-client';
import { useAuth } from '../context/AuthContext';

const BoardPage = () => {
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const projectId = searchParams.get('project');
  const [project, setProject] = useState(null);
  const [boards, setBoards] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', board: '' });
  const [comments, setComments] = useState({});
  const [commentText, setCommentText] = useState({});
  const socketRef = useRef(null);

  const loadBoard = async () => {
    const res = await api.get(`/projects/${projectId}`);
    setProject(res.data.project);
    setBoards(res.data.boards || []);
    setTasks(res.data.tasks || []);
  };

  useEffect(() => {
    if (!projectId) {
      navigate('/dashboard');
      return;
    }

    loadBoard();
  }, [projectId, navigate]);

  useEffect(() => {
    if (!projectId) return;

    socketRef.current = io(import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000');
    socketRef.current.emit('joinProject', projectId);

    socketRef.current.on('taskUpdated', (payload) => {
      if (payload.project === projectId) {
        setTasks((current) => current.map((task) => (task._id === payload.task._id ? payload.task : task)));
      }
    });

    socketRef.current.on('commentAdded', (payload) => {
      if (payload.project === projectId) {
        setComments((current) => ({ ...current, [payload.comment.task]: [ ...(current[payload.comment.task] || []), payload.comment ] }));
      }
    });

    return () => {
      socketRef.current?.disconnect();
      socketRef.current = null;
    };
  }, [projectId]);

  const groupedTasks = useMemo(() => {
    const map = {};
    boards.forEach((board) => { map[board._id] = []; });
    tasks.forEach((task) => {
      if (!map[task.board]) map[task.board] = [];
      map[task.board].push(task);
    });
    return map;
  }, [boards, tasks]);

  const handleDragEnd = async (result) => {
    const { destination } = result;
    if (!destination) return;

    const taskId = result.draggableId;
    const task = tasks.find((item) => item._id === taskId);
    if (!task || task.board === destination.droppableId) return;

    const updatedTask = { ...task, board: destination.droppableId };
    setTasks((current) => current.map((item) => (item._id === taskId ? updatedTask : item)));
    const res = await api.put(`/tasks/${taskId}`, { board: destination.droppableId });
    setTasks((current) => current.map((item) => (item._id === taskId ? res.data.task : item)));
    socketRef.current?.emit('taskUpdated', { project: projectId, task: res.data.task });
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    const boardId = newTask.board || boards[0]?._id;
    if (!boardId) return;

    const res = await api.post('/tasks', { board: boardId, title: newTask.title, description: newTask.description });
    setTasks((current) => [...current, res.data.task]);
    setNewTask({ title: '', description: '', board: boardId });
    socketRef.current?.emit('taskUpdated', { project: projectId, task: res.data.task });
  };

  const loadComments = async (taskId) => {
    const res = await api.get(`/tasks/${taskId}/comments`);
    setComments((current) => ({ ...current, [taskId]: res.data.comments || [] }));
  };

  const handleCommentSubmit = async (taskId) => {
    if (!commentText[taskId]?.trim()) return;
    const res = await api.post('/tasks/comments', { task: taskId, message: commentText[taskId] });
    setComments((current) => ({ ...current, [taskId]: [...(current[taskId] || []), res.data.comment] }));
    setCommentText((current) => ({ ...current, [taskId]: '' }));
    socketRef.current?.emit('commentAdded', { project: projectId, comment: res.data.comment });
  };

  if (!project) return <div className="p-6">Loading board...</div>;

  return (
    <div className="min-h-screen bg-slate-100 p-6 text-slate-800">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex items-center justify-between rounded-3xl bg-white p-6 shadow-sm">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Kanban board</p>
            <h1 className="mt-2 text-3xl font-semibold">{project.title}</h1>
            <p className="mt-2 text-sm text-slate-500">{project.description}</p>
          </div>
          <button onClick={() => navigate('/dashboard')} className="rounded-xl border border-slate-300 px-4 py-2 font-medium text-slate-700">Back to dashboard</button>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Create a task</h2>
          <form onSubmit={handleCreateTask} className="mt-4 grid gap-3 md:grid-cols-[1.2fr_1fr_0.3fr]">
            <input className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500" placeholder="Task title" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} required />
            <input className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500" placeholder="Task details" value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} />
            <select className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500" value={newTask.board} onChange={(e) => setNewTask({ ...newTask, board: e.target.value })}>
              {boards.map((board) => <option key={board._id} value={board._id}>{board.title}</option>)}
            </select>
            <button className="md:col-span-3 rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-white">Add task</button>
          </form>
        </div>

        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="grid gap-4 xl:grid-cols-5">
            {boards.map((board) => (
              <Droppable key={board._id} droppableId={board._id}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps} className="rounded-3xl bg-slate-900 p-4 text-white shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="font-semibold">{board.title}</h3>
                      <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs">{groupedTasks[board._id]?.length || 0}</span>
                    </div>
                    <div className="space-y-3">
                      {(groupedTasks[board._id] || []).map((task, index) => (
                        <Draggable key={task._id} draggableId={task._id} index={index}>
                          {(dragProvided) => (
                            <div ref={dragProvided.innerRef} {...dragProvided.draggableProps} {...dragProvided.dragHandleProps} className="rounded-2xl bg-white p-3 text-slate-800 shadow">
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <p className="font-semibold">{task.title}</p>
                                  <p className="mt-1 text-sm text-slate-500">{task.description}</p>
                                </div>
                                <span className="rounded-full bg-cyan-100 px-2 py-1 text-xs font-medium text-cyan-700">{task.priority}</span>
                              </div>
                              <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                                <span>Owner: {task.assignee?.name || 'Unassigned'}</span>
                                <button onClick={() => loadComments(task._id)} className="font-medium text-cyan-600">Comments</button>
                              </div>
                              {comments[task._id] && (
                                <div className="mt-3 rounded-xl bg-slate-50 p-3">
                                  {(comments[task._id] || []).map((comment) => (
                                    <div key={comment._id} className="mb-2 text-sm text-slate-600">
                                      <span className="font-semibold text-slate-800">{comment.user?.name || 'User'}:</span> {comment.message}
                                    </div>
                                  ))}
                                  <textarea className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Leave a comment" value={commentText[task._id] || ''} onChange={(e) => setCommentText((current) => ({ ...current, [task._id]: e.target.value }))} />
                                  <button onClick={() => handleCommentSubmit(task._id)} className="mt-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">Post</button>
                                </div>
                              )}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default BoardPage;
