import Footer from '../../components/Footer';
import SnowfallBackground from '../../components/SnowFallBackground';
import This from '../../components/This';
import './index.css';

const data = {
	lugares_para_visitar: [
		{
			title: "Baños de agua santa", links: [
				{ title: "Como llegar", link: "https://example.com/como-llegar" },
				{ title: "Ver hoteles", link: "https://example.com/menu" }
			]
		},
		{
			title: "Montañita", links: [
				{ title: "Como llegar", link: "https://example.com/como-llegar" },
				{ title: "Ver hoteles", link: "https://example.com/menu" }
			]
		}
	],
	lugares_para_comer: [
		{
			title: "Restaurante del Mar",
			links: [
				{ title: "Como llegar", link: "https://example.com/como-llegar" },
				{ title: "Ver menú", link: "https://example.com/menu" }
			]
		},
		{
			title: "La Casa de la Abuela",
			links: [
				{ title: "Como llegar", link: "https://example.com/como-llegar-casa" },
				{ title: "Ver menú", link: "https://example.com/menu-casa" }
			]
		}
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
								<li key={index} className="list-item">
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
