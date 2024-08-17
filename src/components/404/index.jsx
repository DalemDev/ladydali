import { Link } from 'react-router-dom';
import './index.css';

export default function NotFound() {
    return (
        <div className="notfound-container">
            <h1 className="notfound-title">404</h1>
            <p className="notfound-message">Oh no preciosa, la página que estas buscando no existe.</p>
            <Link to="/" className="notfound-link">Volver al inicio</Link>
        </div>
    );
}
