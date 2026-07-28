import apiClient from './api'

const authService = {
  register: async (username, email, password) => {
    const response = await apiClient.post('/auth/register', {
      username,
      email,
      password,
    })
    return response.data
  },

  login: async (email, password) => {
    const response = await apiClient.post('/auth/login', {
      email,
      password,
    })
    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
    }
    return response.data
  },

  logout: () => {
    localStorage.removeItem('token')
  },

  getCurrentUser: async () => {
    try {
      const response = await apiClient.get('/auth/me')
      return response.data
    } catch (error) {
      return null
    }
  },
}

const projectService = {
  getAll: async () => {
    const response = await apiClient.get('/projects')
    return response.data
  },

  getById: async (id) => {
    const response = await apiClient.get(`/projects/${id}`)
    return response.data
  },

  create: async (project) => {
    const response = await apiClient.post('/projects', project)
    return response.data
  },

  update: async (id, updates) => {
    const response = await apiClient.put(`/projects/${id}`, updates)
    return response.data
  },

  delete: async (id) => {
    await apiClient.delete(`/projects/${id}`)
  },
}

const aiService = {
  sendMessage: async (projectId, message, model = 'gpt-4') => {
    const response = await apiClient.post('/ai/chat', {
      projectId,
      message,
      model,
    })
    return response.data
  },

  generateCode: async (projectId, prompt, language = 'javascript') => {
    const response = await apiClient.post('/ai/generate-code', {
      projectId,
      prompt,
      language,
    })
    return response.data
  },

  getModels: async () => {
    const response = await apiClient.get('/ai/models')
    return response.data
  },
}

export { authService, projectService, aiService }
