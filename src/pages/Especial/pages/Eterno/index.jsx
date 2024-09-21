import SnowfallBackground from '../../../../components/SnowFallBackground';
import This from '../../../../components/This';
import './index.css';

export default function index() {
	return (
		<>
			<SnowfallBackground />

			<This title="Rosa eterna" />

			<div className="container_rose">
				<div className="thorns">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className="leaves">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className="petals">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className="deadPetals">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>

			<h4 className="texto">Mi amor por ti durará hasta que caiga el último pétalo mi preciosa ❤️</h4>
		</>
	)
}
