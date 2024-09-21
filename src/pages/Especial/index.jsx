import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import SnowfallBackground from '../../components/SnowFallBackground';
import This from '../../components/This';
import './index.css';

export default function index() {
	return (
		<>
			<SnowfallBackground />
			<This title="Dia especial" />
			<div className="menu-container especial">
				<Link to="/dia_especial/rosa_eterna" className="menu-card">∞ Para siempre</Link>
				<Link to="/dia_especial/flores_amarillas" className="menu-card">21-09-2024 Flores amarillas</Link>
			</div>
			<Footer />
		</>
	)
}
