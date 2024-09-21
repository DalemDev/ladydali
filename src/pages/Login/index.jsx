import { useEffect, useState } from 'react';
import { mostrarCargando, notify, ocultarCargando } from '../../helpers/index';
import { loginWithFirestore } from '../../firebase/AuthController';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { useAuth } from '../../firebase/AuthContext';

export default function Login() {
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const { currentUser, setCurrentUser } = useAuth();

	const handleSubmit = (e) => {
		e.preventDefault();
		mostrarCargando();

		loginWithFirestore(user, password).then((response) => {
			if (!response?.succes) {
				notify(response?.message || 'Error al iniciar sesión', 'error');
				return;
			}

			localStorage.setItem('user', JSON.stringify(response?.data));
			setCurrentUser(response?.data);

			navigate('/');
		}).catch((error) => {
			notify(error?.message || 'Error al iniciar sesión', 'error');
		}).finally(() => {
			ocultarCargando();
		});
	};

	useEffect(() => {
		if (currentUser) {
			navigate('/');
		}
	}, [currentUser, navigate]);

	return (
		<div className="container_login">
			<form onSubmit={handleSubmit} className="form">
				<h2>❤️ Inicia Sesión ❤️</h2>
				<div className="inputGroup">
					<label htmlFor="user">Usuario:</label>
					<input
						type="text"
						id="user"
						value={user}
						onChange={(e) => setUser(e.target.value)}
						required
						className="input"
					/>
				</div>
				<div className="inputGroup">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className="input"
					/>
				</div>
				<button type="submit" className="button">Ingresar</button>
			</form>
		</div>
	);
};
