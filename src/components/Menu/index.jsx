import { Link } from 'react-router-dom';
import { rutas } from '../../main';
import { formatTitle } from '../../helpers';
import './index.css';

export default function Menu() {
	return (
		<div className="menu-container">
			{rutas.map((ruta, index) => {
				if (ruta.path === '/' || ruta.path === '/login' || ruta.path === '*') return null;

				const link = formatTitle(ruta.path.replace('/', ''));

				return (
					<Link key={index} to={ruta.path} className="button_card">
						{link}
					</Link>
				);
			})}
		</div>
	);
}
