import { FaHeart } from 'react-icons/fa';
import './index.css';
import SnowfallBackground from '../../components/SnowFallBackground';
import This from '../../components/This';
import Footer from '../../components/Footer';
import pdf_para_mi_nina from '../../assets/pdf/Para mi niña preciosa.pdf';

const tiktoks = [
	{
		title: "Nuestro bello click",
		link: "https://vm.tiktok.com/ZMrt33YbJ/",
		adicional: [
			{
				title: "Descarga el pdf",
				link: pdf_para_mi_nina,
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
							<a className="tiktok-title" href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
						</div>
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
