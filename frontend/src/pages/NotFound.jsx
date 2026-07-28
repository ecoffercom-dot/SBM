import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-gray-600 text-xl mb-8">الصفحة غير موجودة</p>
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition"
        >
          العودة للرئيسية
        </button>
      </div>
    </div>
  )
}

export default NotFound
