import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const loadProjects = async () => {
    const res = await api.get('/projects');
    setProjects(res.data.projects || []);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    await api.post('/projects', { title, description });
    setTitle('');
    setDescription('');
    loadProjects();
  };

  const summary = useMemo(() => ({
    total: projects.length,
    active: projects.filter((project) => project.status === 'active').length,
  }), [projects]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-100 p-6 text-slate-800">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex items-center justify-between rounded-3xl bg-white p-6 shadow-sm">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Workspace</p>
            <h1 className="mt-2 text-3xl font-semibold">Welcome back, {user.name}</h1>
            <p className="mt-2 text-sm text-slate-500">Coordinate delivery with a modern kanban experience.</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => navigate('/board')} className="rounded-xl bg-slate-900 px-4 py-2 font-medium text-white">Open board</button>
            <button onClick={logout} className="rounded-xl border border-slate-300 px-4 py-2 font-medium text-slate-700">Logout</button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Projects</p>
            <p className="mt-2 text-3xl font-semibold">{summary.total}</p>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Active</p>
            <p className="mt-2 text-3xl font-semibold">{summary.active}</p>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Access</p>
            <p className="mt-2 text-3xl font-semibold">Secure</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Your projects</h2>
              <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">{projects.length} available</span>
            </div>
            <div className="space-y-3">
              {projects.map((project) => (
                <button key={project._id} onClick={() => navigate(`/board?project=${project._id}`)} className="w-full rounded-2xl border border-slate-200 p-4 text-left transition hover:border-cyan-400">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{project.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">{project.description || 'A modern delivery workspace.'}</p>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">{project.status}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Create a project</h2>
            <form onSubmit={handleCreate} className="mt-4 space-y-3">
              <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500" placeholder="Project name" value={title} onChange={(e) => setTitle(e.target.value)} required />
              <textarea className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500" placeholder="Project description" value={description} onChange={(e) => setDescription(e.target.value)} rows={4} />
              <button className="w-full rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-white">Create project</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
