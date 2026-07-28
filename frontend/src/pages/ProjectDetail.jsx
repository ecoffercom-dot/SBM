import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { projectService, aiService } from '../services'
import useStore from '../store/appStore'

function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [chatMessage, setChatMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([])
  const [aiModel, setAiModel] = useState('gpt-4')
  const [models, setModels] = useState([])

  useEffect(() => {
    loadProject()
    loadAIModels()
  }, [id])

  const loadProject = async () => {
    try {
      const data = await projectService.getById(id)
      setProject(data)
    } catch (error) {
      console.error('Error loading project:', error)
      navigate('/dashboard')
    } finally {
      setLoading(false)
    }
  }

  const loadAIModels = async () => {
    try {
      const data = await aiService.getModels()
      setModels(data.models || [])
    } catch (error) {
      console.error('Error loading models:', error)
    }
  }

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!chatMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      text: chatMessage,
      sender: 'user',
      timestamp: new Date(),
    }

    setChatMessages([...chatMessages, userMessage])
    setChatMessage(''))

    try {
      const response = await aiService.sendMessage(id, chatMessage, aiModel)
      const aiMessage = {
        id: Date.now() + 1,
        text: response.response,
        sender: 'ai',
        timestamp: new Date(),
      }
      setChatMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <button
              onClick={() => navigate('/dashboard')}
              className="text-indigo-600 hover:text-indigo-700 font-bold mb-2"
            >
              ← العودة
            </button>
            <h1 className="text-3xl font-bold text-gray-800">{project?.name}</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Editor Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">محرر الأكواد</h2>
              <div className="bg-gray-900 rounded text-white p-4 font-mono text-sm overflow-x-auto">
                <p className="text-gray-500">// محرر الأكواد سيتم تطويره قريباً</p>
              </div>
            </div>
          </div>

          {/* AI Chat Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">مساعد AI</h2>

              {/* Model Selector */}
              <div className="mb-4">
                <select
                  value={aiModel}
                  onChange={(e) => setAiModel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {models.map((model) => (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto mb-4 p-4 bg-gray-50 rounded border border-gray-200 space-y-4">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-3 rounded ${msg.sender === 'user' ? 'bg-indigo-100 text-right' : 'bg-gray-200'}`}
                  >
                    <p className="text-sm text-gray-800">{msg.text}</p>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="space-y-2">
                <textarea
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="اسأل AI..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                  rows="3"
                />
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition"
                >
                  إرسال
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProjectDetail
