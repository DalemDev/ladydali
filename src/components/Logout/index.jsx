import { useAuth } from "../../firebase/Auth/AuthContext";
import './index.css';

export default function index() {
	const { logout } = useAuth();

	return (
		<button className="button button_logout" onClick={logout}>
			Cerrar Sesión
		</button>
	)
}
