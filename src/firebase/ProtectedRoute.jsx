import { Navigate } from 'react-router-dom';
import { useAuth } from './Auth/AuthContext';

export default function ProtectedRoute({ element }) {
	const { currentUser, loading } = useAuth();

	if (loading) {
		return;
	}

	if (!currentUser) {
		return <Navigate to="/login" />;
	}

	return element;
}