import { create } from 'zustand'

const useStore = create((set) => ({
  // User state
  user: null,
  loading: true,
  error: null,

  // Projects state
  projects: [],
  currentProject: null,

  // Chat state
  chatMessages: [],

  // Actions
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),

  setProjects: (projects) => set({ projects }),
  setCurrentProject: (project) => set({ currentProject: project }),
  addProject: (project) => set((state) => ({
    projects: [...state.projects, project],
  })),
  updateProject: (id, updates) => set((state) => ({
    projects: state.projects.map((p) =>
      p.id === id ? { ...p, ...updates } : p
    ),
  })),
  deleteProject: (id) => set((state) => ({
    projects: state.projects.filter((p) => p.id !== id),
  })),

  setChatMessages: (messages) => set({ chatMessages: messages }),
  addChatMessage: (message) => set((state) => ({
    chatMessages: [...state.chatMessages, message],
  })),

  // Logout
  logout: () => set({
    user: null,
    projects: [],
    currentProject: null,
    chatMessages: [],
  }),
}))

export default useStore
