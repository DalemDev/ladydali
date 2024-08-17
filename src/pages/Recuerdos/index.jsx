import SnowfallBackground from '../../components/SnowFallBackground';
import This from '../../components/This';
import primera_cita from '../../assets/videos/recuerdo_primera_cita.mp4';
import encuentro_uni from '../../assets/videos/recuerdo_uni.mp4';
import './index.css';
import Footer from '../../components/Footer';

export default function Recuerdos() {
	const recuerdos = [
		{
			type: 'video',
			src: primera_cita,
			description: 'Nuestra primer cita 11-08-2024'
		},
		{
			type: 'image',
			src: encuentro_uni,
			description: 'En la universidad 07-08-2024'
		},
	];

	return (
		<>
			<SnowfallBackground />
			<This title="Recuerdos" />
			<div className="recuerdos-container">
				{recuerdos.map((recuerdo, index) => (
					<div className="recuerdo-card" key={index}>
						{recuerdo.type === 'video' ? (
							<video className="recuerdo-media" src={recuerdo.src} autoPlay loop muted></video>
						) : (
							<img className="recuerdo-media" src={recuerdo.src} alt="Recuerdo" />
						)}
						<div className="recuerdo-description">{recuerdo.description}</div>
					</div>
				))}
			</div>
			<Footer />
		</>
	);
}
