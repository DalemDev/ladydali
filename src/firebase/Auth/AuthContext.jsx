import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));

		if (user && user.autenticado && user.expira > new Date().getTime()) {
			setCurrentUser(user);
		} else {
			setCurrentUser(null);
		}

		setLoading(false);
	}, []);

	const logout = () => {
		localStorage.removeItem('user');
		setCurrentUser(null);
	};

	const value = {
		currentUser,
		setCurrentUser,
		logout,
		loading,
	};

	return <AuthContext.Provider value={value}>
		{children}
	</AuthContext.Provider>;
}