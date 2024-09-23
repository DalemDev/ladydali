import { useEffect, useState } from 'react';
import { mostrarCargando, notify, ocultarCargando } from '../../helpers/index';
import { loginWithFirestore } from '../../firebase/Auth/AuthController';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../firebase/Auth/AuthContext';
import './index.css';

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
			<form onSubmit={handleSubmit} className="form_login">
				<h2>❤️ Inicia Sesión ❤️</h2>
				<div className="inputGroup_login">
					<label htmlFor="user" className='label_login'>Usuario:</label>
					<input
						type="text"
						id="user"
						value={user}
						onChange={(e) => setUser(e.target.value)}
						required
						className="input_login"
					/>
				</div>
				<div className="inputGroup_login">
					<label htmlFor="password" className='label_login'>Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className="input_login"
					/>
				</div>
				<button type="submit" className="button button_login">Ingresar</button>
			</form>
		</div>
	);
};
