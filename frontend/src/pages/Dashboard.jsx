import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { projectService } from '../services'
import useStore from '../store/appStore'
import useAuth from '../hooks/useAuth'

function Dashboard() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const { projects, setProjects } = useStore()
  const [loading, setLoading] = useState(true)
  const [showNewProject, setShowNewProject] = useState(false)
  const [newProjectName, setNewProjectName] = useState('')
  const [newProjectDesc, setNewProjectDesc] = useState('')

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = async () => {
    try {
      const data = await projectService.getAll()
      setProjects(data.projects || [])
    } catch (error) {
      console.error('Error loading projects:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateProject = async (e) => {
    e.preventDefault()
    try {
      const newProject = await projectService.create({
        name: newProjectName,
        description: newProjectDesc,
        type: 'web',
      })
      setProjects([...projects, newProject])
      setNewProjectName('')
      setNewProjectDesc('')
      setShowNewProject(false)
    } catch (error) {
      console.error('Error creating project:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">🚀 SBM</h1>
            <p className="text-gray-600">مرحباً {user?.username}</p>
          </div>
          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            تسجيل الخروج
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* New Project Button */}
        <div className="mb-8">
          <button
            onClick={() => setShowNewProject(!showNewProject)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition"
          >
            + مشروع جديد
          </button>
        </div>

        {/* New Project Form */}
        {showNewProject && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">إنشاء مشروع جديد</h2>
            <form onSubmit={handleCreateProject} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">اسم المشروع</label>
                <input
                  type="text"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  placeholder="مثال: تطبيق المتجر"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">الوصف</label>
                <textarea
                  value={newProjectDesc}
                  onChange={(e) => setNewProjectDesc(e.target.value)}
                  placeholder="وصف المشروع"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="4"
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition"
                >
                  إنشاء المشروع
                </button>
                <button
                  type="button"
                  onClick={() => setShowNewProject(false)}
                  className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg transition"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Projects Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">مشاريعك</h2>
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
            </div>
          ) : projects.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-600 text-lg">لا توجد مشاريع حالياً. ابدأ بإنشاء مشروع جديد!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer p-6"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description || 'بدون وصف'}</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                      {project.status || 'مسودة'}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {new Date(project.createdAt).toLocaleDateString('ar-SA')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Dashboard
