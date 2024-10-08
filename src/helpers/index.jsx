import { Bounce, toast } from 'react-toastify';

const validTypes = ['success', 'error', 'info', 'warn'];
const defaultProperties = {
	position: "top-right",
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "light",
	transition: Bounce,
};

export const notify = (message = '', type = '', properties = {}) => {

	const isValidType = validTypes.includes(type);

	if (!isValidType) {
		throw new Error('Tipo inválido');
	}

	properties = { ...defaultProperties, ...properties };

	switch (type) {
		case 'success':
			toast.success(message, properties);
			break;
		case 'error':
			toast.error(message, properties);
			break;
		case 'info':
			toast.info(message, properties);
			break;
		case 'warn':
			toast.warn(message, properties);
			break;
		default:
			toast(message, properties);
	}
};

export const formatTitle = (str) => {
	return str
		.replace(/_/g, ' ')
		.split(' ')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};

export const mostrarCargando = () => {
	document.querySelector('.loader-overlay').classList.add('active');
};

export const ocultarCargando = () => {
	document.querySelector('.loader-overlay').classList.remove('active');
};

export const getUser = () => {
	const user = JSON.parse(localStorage.getItem('user'));

	if (!user?.autenticado) throw new Error('Usuario no autenticado');

	return user;
}

export const obtenerFechaActual = () => {
	const fecha = new Date();
	const dia = String(fecha.getDate()).padStart(2, '0');
	const mes = String(fecha.getMonth() + 1).padStart(2, '0');
	const anio = fecha.getFullYear();
	return `${dia}-${mes}-${anio}`;
};