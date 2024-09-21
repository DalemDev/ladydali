import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import SnowfallBackground from '../../components/SnowFallBackground';
import This from '../../components/This';
import { createItem, deleteItem, getListas, updateVisitado } from '../../firebase/ListasController';
import { formatTitle, mostrarCargando, notify, ocultarCargando } from '../../helpers/index';
import './index.css';

export default function Listas() {
	const [listas, setListas] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [newItem, setNewItem] = useState({
		title: '',
		links: [{ title: '¿Como llegar?', link: '' }],
		visitado: false,
		tipo: 'para_comer'
	});

	const toggleForm = () => setShowForm(!showForm);

	const handleInputChange = (e) => {
		const { name, value, checked, type } = e.target;
		setNewItem({
			...newItem,
			[name]: type === 'checkbox' ? checked : value
		});
	};

	const addNewLink = () => {
		setNewItem({
			...newItem,
			links: [...newItem.links, { title: '¿Como llegar?', link: '' }]
		});
	};

	const removeLink = (index) => {
		const updatedLinks = newItem.links.filter((link, i) => i !== index);
		setNewItem({ ...newItem, links: updatedLinks });
	};

	const handleLinkChange = (e, index) => {
		const { name, value } = e.target;
		const updatedLinks = newItem.links.map((link, i) =>
			i === index ? { ...link, [name]: value } : link
		);
		setNewItem({ ...newItem, links: updatedLinks });
	};

	const handleSubmit = () => {
		mostrarCargando();
		createItem(newItem).then((response) => {
			if (!response?.success) {
				throw new Error(response?.message || 'Error al crear el item');
			}

			notify('Destino guardado con éxito', 'success');
			setNewItem({ title: '', links: [{ title: '', link: '' }], visitado: false, tipo: 'para_comer' });

			toggleForm();
			fetchData();
		}).catch((error) => {
			notify(error?.message, 'error');
			ocultarCargando();
		});
	};

	const handleItemClick = (item) => {
		mostrarCargando();

		updateVisitado(item.tipo, item.title).then(response => {
			if (!response?.success) {
				throw new Error(response?.message || 'Error al actualizar el item');
			}

			if (!item.visitado) {
				notify('Otra aventura más juntos ❤️', 'success');
			}
		}).catch(error => {
			notify(error?.message, 'error');
		}).finally(() => {
			fetchData();
		});
	};

	const handleDeleteItem = (item) => {
		mostrarCargando();

		deleteItem(item.tipo, item.title).then(response => {
			if (!response?.success) {
				throw new Error(response?.message || 'Error al eliminar el item');
			}

			notify('Destino eliminado con éxito', 'success');
		}).catch(error => {
			notify(error?.message, 'error');
		}).finally(() => {
			fetchData();
		});
	}

	const fetchData = () => {
		mostrarCargando();
		getListas().then((response) => {
			if (!response?.succes) {
				notify(response?.message, 'error');
			}

			setListas(response?.data);
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
			<This title="Listas" />
			<div className="listas-container">
				<div className="acciones">
					<button className='btn-nuevo' onClick={toggleForm}>Nuevo</button>
				</div>

				{showForm && (
					<div className="modal">
						<div className="modal-content">
							<h2>Nuevo destino</h2>

							<div>
								<label>Título principal:</label>
								<input type="text" name="title" value={newItem.title} onChange={handleInputChange} />
							</div>

							<div>
								<label>Tipo de lugar:</label>
								<select name="tipo" value={newItem.tipo} onChange={handleInputChange}>
									<option value="para_comer">Para comer</option>
									<option value="para_visitar">Para visitar</option>
								</select>
							</div>

							<div>
								<label>Links:</label>
								{newItem.links.map((link, index) => (
									<div className='links' key={index}>
										<input
											type="text"
											name="title"
											placeholder="Título del link"
											value={link.title}
											onChange={(e) => handleLinkChange(e, index)}
										/>
										<input
											type="url"
											name="link"
											placeholder="Link"
											value={link.link}
											onChange={(e) => handleLinkChange(e, index)}
										/>
										<button className='btn-eliminar' onClick={() => removeLink(index)}>Eliminar</button>
									</div>
								))}
								<button className='btn-agregar' onClick={addNewLink}>Agregar otro link</button>
							</div>

							<div>
								<label>
									<input
										type="checkbox"
										name="visitado"
										checked={newItem.visitado}
										onChange={handleInputChange}
									/>
									Visitado
								</label>
							</div>

							<div className="modal-actions">
								<button onClick={handleSubmit}>Guardar</button>
								<button onClick={toggleForm}>Cancelar</button>
							</div>
						</div>
					</div>
				)}

				{listas.map((data) => (
					Object.keys(data).map((key, index) => (
						<div key={index} className="list-section">
							<h1 className="list-title">{formatTitle(key)}</h1>
							<ul className="list-items">
								{data[key].map((item, index) => (
									<li key={index} className={`list-item ${item?.visitado ? 'visitado' : ''}`}>
										{item.title && <h2 className="item-title">{item.title}</h2>}
										{item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="item-link">Ver más</a>}
										{item.links && (
											<>
												<ul className="item-links">
													{item.links.map((subItem, subIndex) => (
														<li key={subIndex} className="sub-item">
															<a href={subItem.link} target="_blank" rel="noopener noreferrer" className="sub-item-link">
																{subItem.title}
															</a>
														</li>
													))}

												</ul>
												<div className="acciones_list">
													<button onClick={() => handleDeleteItem({
														...item,
														tipo: key
													})} className='accion-item-link'>
														Eliminar
													</button>
													<button onClick={() => handleItemClick({
														...item,
														tipo: key
													})} className="visitado-btn">
														{item.visitado ? 'Desmarcar' : 'Visitar'}
													</button>
												</div>
											</>
										)}
									</li>
								))}
							</ul>
						</div>
					))
				))}
			</div>
			<Footer />
		</>
	);
}
