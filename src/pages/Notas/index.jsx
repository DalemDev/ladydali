import { useEffect, useState } from 'react';
import SnowfallBackground from '../../components/SnowFallBackground';
import This from '../../components/This';
import { formatTitle, mostrarCargando, notify, ocultarCargando } from '../../helpers';
import { createNota, deleteNota, getNotas } from '../../firebase/Notas/NotasController';
import './index.css';

export default function index() {
	const [notas, setNotas] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [newItem, setNewItem] = useState({
		content: '',
	});

	const toggleForm = () => setShowForm(!showForm);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewItem({
			...newItem,
			[name]: value
		});
	};

	const handleDeleteItem = (item) => {
		mostrarCargando();
		deleteNota(item).then((response) => {
			if (!response?.success) {
				notify(response?.message, 'error');
			}

			notify('Nota eliminada con éxito', 'success');
			fetchData();
		}).catch((error) => {
			notify(error?.message, 'error');
			ocultarCargando();
		});
	};

	const handleSubmit = () => {
		mostrarCargando();
		createNota(newItem).then((response) => {
			console.log(response);
			if (!response?.success) {
				notify(response?.message, 'error');
			}

			notify('Nota guardada con éxito', 'success');
			setNewItem({ content: '' });

			toggleForm();
			fetchData();
		}).catch((error) => {
			notify(error?.message, 'error');
			ocultarCargando();
		});
	};

	const fetchData = () => {
		mostrarCargando();
		getNotas().then((response) => {
			console.log(response);

			if (!response?.success) {
				notify(response?.message, 'error');
			}

			setNotas(response.data || []);
		}).catch((error) => {
			notify(error?.message, 'error');
		}).finally(() => {
			ocultarCargando();
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<SnowfallBackground />
			<This title="Notas" />

			<div className="container">
				<div className="acciones">
					<button className='btn-nuevo' onClick={toggleForm}>Nueva nota</button>
				</div>

				{showForm && (
					<div className="modal">
						<div className="modal-content">
							<h2>Nueva nota</h2>

							<div>
								<label>¿Que tienes para decir?</label>
								<input type="text" name="content" value={newItem.content} onChange={handleInputChange} />
							</div>

							<div className="modal-actions">
								<button onClick={handleSubmit}>Guardar</button>
								<button onClick={toggleForm}>Cancelar</button>
							</div>
						</div>
					</div>
				)}

				<ul className="list-items">
					{notas.map((nota, index) => (
						<li key={index} className="list-item item_notas">
							{nota.title && <h2 className="item-title">{formatTitle(`${nota.title} - ${nota?.to}`)}</h2>}
							<p className="item-content">{nota.content}</p>
							<div className="acciones_list">
								<button onClick={() => handleDeleteItem(nota?.id)} className='accion-item-link'>
									Eliminar
								</button>
							</div>
						</li>
					))}
				</ul>

			</div>
		</>
	)
}
