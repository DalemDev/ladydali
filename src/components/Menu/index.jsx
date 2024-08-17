import { Link } from 'react-router-dom';
import './index.css';

export default function Menu() {
	return (
		<div className="menu-container">
			<Link to="/recuerdos" className="menu-card">Recuerdos</Link>
			<Link to="/galeria" className="menu-card">Galeria</Link>
			<Link to="/tiktoks" className="menu-card">TikToks</Link>
			<Link to="/listas" className="menu-card">Listas</Link>
		</div>
	);
}
