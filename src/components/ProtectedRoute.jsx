import { Navigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function ProtectedRoute({ children, admin = false }) {
    const { session } = useApp()

    // User is not logged in
    if (!session) {
        return (
            <Navigate
                to={admin ? '/admin-login' : '/login'}
                replace
            />
        )
    }

    // Admin-only route
    if (admin) {
        if (session.type !== 'admin') {
            return <Navigate to="/" replace />
        }

        return children
    }

    // User-only route
    if (session.type !== 'user') {
        return <Navigate to="/" replace />
    }

    return children
}