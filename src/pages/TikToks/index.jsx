import { FaHeart } from 'react-icons/fa';
import './index.css';
import SnowfallBackground from '../../components/SnowFallBackground';
import This from '../../components/This';
import Footer from '../../components/Footer';

const tiktoks = [
	{
		title: "Nuestro primer TikTok",
		description: "Un momento especial capturado en video.",
		link: "https://www.tiktok.com/@example/video/123456789",
		adicional: [
			{
				title: "PDF de amor",
				link: "/path/to/love.pdf",
				type: "download"
			}
		]
	},
];

export default function TikToks() {
	return (
		<>
			<SnowfallBackground />
			<This title="TikToks" />
			<div className="tiktoks-container">
				{tiktoks.map((item, index) => (
					<div key={index} className="tiktok-card">
						<div className="tiktok-header">
							<FaHeart className="heart-icon" />
							<h2 className="tiktok-title">{item.title}</h2>
						</div>
						<p className="tiktok-description">{item.description}</p>
						<a href={item.link} target="_blank" rel="noopener noreferrer" className="tiktok-link">Ver en TikTok</a>
						<div className="adicional-links">
							{item.adicional.map((extra, i) => (
								<div key={i} className="adicional-item">
									{extra.type === "link" && (
										<a href={extra.link} target="_blank" rel="noopener noreferrer" className="adicional-link">
											{extra.title}
										</a>
									)}
									{extra.type === "button" && (
										<button onClick={extra.function} className="adicional-button">
											{extra.title}
										</button>
									)}
									{extra.type === "download" && (
										<a href={extra.link} download className="adicional-download">
											{extra.title}
										</a>
									)}
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			<Footer />
		</>
	);
}
