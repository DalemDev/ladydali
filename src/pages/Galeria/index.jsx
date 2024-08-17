import './index.css';
import vide1 from '../../assets/videos/recuerdo_primera_cita.mp4';
import vide2 from '../../assets/videos/recuerdo_primera_cita.mp4';
import vide3 from '../../assets/videos/recuerdo_primera_cita.mp4';
import vide4 from '../../assets/videos/recuerdo_primera_cita.mp4';
import SnowfallBackground from '../../components/SnowFallBackground';
import This from '../../components/This';
import Footer from '../../components/footer';

export default function Galeria() {
	const items = [
		{ id: 1, type: 'image', src: vide1, },
		{ id: 2, type: 'video', src: vide2, },
		{ id: 3, type: 'image', src: vide3, },
		{ id: 4, type: 'video', src: vide4, },
	];

	return (
		<>
			<SnowfallBackground />
			<This title="Galeria" />
			<div className="gallery-container">
				{items.map(item => (
					<div key={item.id} className="gallery-item">
						{item.type === 'image' ? (
							<img src={item.src} alt={item.description} className="gallery-media" />
						) : (
							<video src={item.src} className="gallery-media" autoPlay muted loop />
						)}
					</div>
				))}
			</div>
			<Footer />
		</>
	);
}
