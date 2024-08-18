import Footer from '../../components/Footer';
import SnowfallBackground from '../../components/SnowFallBackground';
import This from '../../components/This';
import './index.css';

const data = {
	lugares_para_visitar: [
		{
			title: "MR Joy",
			links: [
				{
					title: "¿Como llegar?",
					link: "https://maps.app.goo.gl/UsYs6f5deuf73Uok7"
				},
			]
		},
		{
			title: "Cine",
			links: [
				{ title: "¿Como llegar?", link: "https://maps.app.goo.gl/nN7NqfqiXAayQzT18" },
			]
		},
		{
			title: "Bolos",
			links: [
				{ title: "¿Como llegar?", link: "https://maps.app.goo.gl/E93UhMbRaLr8DCVc6" },
			]
		},
		{
			title: "PaintBall",
			links: [
				{ title: "¿Como llegar?", link: "https://maps.app.goo.gl/mncHpbGcQrQhFcZs5" },
			]
		},
		{
			title: "Play Land Park",
			links: [
				{ title: "¿Como llegar?", link: "https://maps.app.goo.gl/aGEHGv53SfoJaJnbA" },
			]
		},
		{
			title: "Finca La Gloria",
			links: [
				{ title: "¿Como llegar?", link: "https://maps.app.goo.gl/9rNeHbd7XEzo2F8s5" },
			]
		},
		{
			title: "Playas",
			links: [
				{ title: "¿Como llegar?", link: "https://maps.app.goo.gl/DjEj1HwYAdw85YmZA" },
				{ title: "Ver hoteles", link: "https://maps.app.goo.gl/2CUhpes7bkERYjRz9" }
			]
		},
		{
			title: "Colimes",
			links: [
				{ title: "¿Como llegar?", link: "https://maps.app.goo.gl/Kgjzz9E4teESDUB96" },
			]
		},
		{
			title: "Parque Histórico",
			links: [
				{ title: "¿Como llegar?", link: "https://maps.app.goo.gl/PzH7ErTEHCw5k22i9" },
			]
		},
		{
			title: "Zoológico",
			links: [
				{ title: "¿Como llegar?", link: "https://maps.app.goo.gl/vh4KCtNQuKtHDsL6A" },
			]
		},
		{
			title: "Samanes (picnic)",
			links: [
				{ title: "¿Como llegar?", link: "https://maps.app.goo.gl/M9Hdkj6Sg5tV5UDY7" },
			]
		},
		{
			title: "Mirador de bellavista",
			links: [
				{ title: "¿Como llegar?", link: "https://maps.app.goo.gl/wcTJp1CtXKdHoRdr7" },
			]
		},
		{
			title: "El Faro",
			links: [
				{ title: "¿Como llegar?", link: "https://maps.app.goo.gl/1wQ4pVKMxsaoqTbf8" },
			]
		},
		{
			title: "Piscina",
			links: [
				{ title: "¿Como llegar?", link: "https://maps.app.goo.gl/vmqD3pF7dFD6x9ht6" },
			]
		},
		{
			title: "Cuenca",
			links: [
				{ title: "¿Como llegar?", link: "https://maps.app.goo.gl/GxiowwfZKULZe8DQ7" },
				{ title: "Ver hoteles", link: "https://maps.app.goo.gl/jntEa3cJNP7brnTN9" }
			]
		},
		{
			title: "Quito",
			links: [
				{ title: "¿Como llegar?", link: "https://maps.app.goo.gl/hBGZoLkRmhnvqpDi6" },
				{ title: "Ver hoteles", link: "https://maps.app.goo.gl/PnarzLCueD9hssoF9" }
			]
		},
		{
			title: "Galapagos",
			links: [
				{ title: "¿Como llegar?", link: "https://maps.app.goo.gl/zJ7xtDcAUB7EZNRD9" },
				{ title: "Ver hoteles", link: "https://www.ebooking.com/es/c/b-hoteles-galapagos-r/?lang_req=es_EC&currency=USD&utm_adgroup=152219652189&utm_adid=687835203829&gad_source=1	" }
			]
		},
		{
			title: "Bailar",
			links: []
		},
	],
	lugares_para_comer: [
		{
			title: "Comida China",
			links: [
				{ title: "¿Como llegar?", link: "https://maps.app.goo.gl/3zMiCMbQXMUqNHBaA" },
			]
		},
		{
			title: "La costeñita",
			links: [
				{ title: "¿Como llegar?", link: "https://maps.app.goo.gl/QptHywVqgfh5otWx5" },
			]
		},
		{
			title: "Mami T",
			links: [
				{ title: "¿Como llegar?", link: "https://maps.app.goo.gl/Ak6TzCg3FavCg72u8" },
			]
		},
		{
			title: "Route 2.5",
			links: [
				{ title: "¿Como llegar?", link: "https://maps.app.goo.gl/sSqUTeyG3oJZ3T2Q6" },
			],
			visitado: true
		},
	]
};

const formatTitle = (str) => {
	return str.replace(/_/g, ' ').replace(/^\w/, c => c.toUpperCase());
};

export default function Listas() {
	return (
		<>
			<SnowfallBackground />
			<This title="Listas" />
			<div className="listas-container">
				{Object.keys(data).map((key) => (
					<div key={key} className="list-section">
						<h1 className="list-title">{formatTitle(key)}</h1>
						<ul className="list-items">
							{data[key].map((item, index) => (
								<li key={index} className={`list-item ${item.visitado ? 'visitado' : ''}`}>
									{item.title && <h2 className="item-title">{item.title}</h2>}
									{item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="item-link">Ver más</a>}
									{item.links && (
										<ul className="item-links">
											{item.links.map((subItem, subIndex) => (
												<li key={subIndex} className="sub-item">
													<a href={subItem.link} target="_blank" rel="noopener noreferrer" className="sub-item-link">
														{subItem.title}
													</a>
												</li>
											))}
										</ul>
									)}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<Footer />
		</>
	);
}
