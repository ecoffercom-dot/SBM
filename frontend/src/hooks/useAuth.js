import { useNavigate } from 'react-router-dom'
import useStore from '../store/appStore'

function useAuth() {
  const navigate = useNavigate()
  const { user, setUser, logout } = useStore()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return {
    user,
    isAuthenticated: !!user,
    logout: handleLogout,
  }
}

export default useAuth
