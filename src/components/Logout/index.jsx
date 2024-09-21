import { useAuth } from "../../firebase/AuthContext";
import './index.css';

export default function index() {
	const { logout } = useAuth();

	return (
		<button className="logout-button" onClick={logout}>
			Cerrar Sesión
		</button>
	)
}
