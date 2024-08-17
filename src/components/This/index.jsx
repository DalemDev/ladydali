import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './index.css';

export default function This({ title }) {
	return (
		<div className="this-container">
			<span className="this-title">{title}</span>
			<Link to="/" className="this-home-link">
				<FaHome className="this-icon" /> Inicio
			</Link>
		</div>
	);
}
