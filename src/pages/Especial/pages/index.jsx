import { Link } from 'react-router-dom';
import Footer from '../../../components/Footer';
import SnowfallBackground from '../../../components/SnowFallBackground';
import This from '../../../components/This';
import { rutas } from '../../../main';
import { formatTitle } from '../../../helpers';

export default function index() {

	const padre = rutas.find(ruta => ruta.path === '/dia_especial');

	const hijos = (padre?.children || []).map(hijo => {
		if (hijo.index) return null;

		return {
			title: formatTitle(hijo.path),
			url: `${padre.path}/${hijo.path}`
		}
	})
		.filter(hijo => hijo !== null)
		.sort((a, b) => {
			if (a.title < b.title) return -1;
			if (a.title > b.title) return 1;
			return;
		});

	return (
		<>
			<SnowfallBackground />
			<This title="Dia especial" />
			<div className="menu-container">
				{hijos.map((dia, index) => (
					<Link key={index} to={dia.url} className="button_card">
						{dia.title}
					</Link>
				))}
			</div>
			<Footer />
		</>
	)
}
