import Footer from '../../../../components/Footer';
import This from '../../../../components/This';
import './index.css';

export default function index() {
	return (
		<>
			<This title="Flores amarillas" />

			<div className="special-day-container">
				<div className="message-container">
					<h1 className='title_flores'>🌼 ¡Hoy es el día de las flores amarillas! 🌼</h1>
					<p>Te quiero mucho, espero que este día sea tan especial como tú 💛</p>
				</div>
			</div>

			<div className="night"></div>
			<div className="flowers">
				<div className="flower flower--1">
					<div className="flower__leafs flower__leafs--1">
						<div className="flower__leaf flower__leaf--1"></div>
						<div className="flower__leaf flower__leaf--2"></div>
						<div className="flower__leaf flower__leaf--3"></div>
						<div className="flower__leaf flower__leaf--4"></div>
						<div className="flower__white-circle"></div>

						<div className="flower__light flower__light--1"></div>
						<div className="flower__light flower__light--2"></div>
						<div className="flower__light flower__light--3"></div>
						<div className="flower__light flower__light--4"></div>
						<div className="flower__light flower__light--5"></div>
						<div className="flower__light flower__light--6"></div>
						<div className="flower__light flower__light--7"></div>
						<div className="flower__light flower__light--8"></div>
					</div>
					<div className="flower__line">
						<div className="flower__line__leaf flower__line__leaf--1"></div>
						<div className="flower__line__leaf flower__line__leaf--2"></div>
						<div className="flower__line__leaf flower__line__leaf--3"></div>
						<div className="flower__line__leaf flower__line__leaf--4"></div>
						<div className="flower__line__leaf flower__line__leaf--5"></div>
						<div className="flower__line__leaf flower__line__leaf--6"></div>
					</div>
				</div>

				<div className="flower flower--2">
					<div className="flower__leafs flower__leafs--2">
						<div className="flower__leaf flower__leaf--1"></div>
						<div className="flower__leaf flower__leaf--2"></div>
						<div className="flower__leaf flower__leaf--3"></div>
						<div className="flower__leaf flower__leaf--4"></div>
						<div className="flower__white-circle"></div>

						<div className="flower__light flower__light--1"></div>
						<div className="flower__light flower__light--2"></div>
						<div className="flower__light flower__light--3"></div>
						<div className="flower__light flower__light--4"></div>
						<div className="flower__light flower__light--5"></div>
						<div className="flower__light flower__light--6"></div>
						<div className="flower__light flower__light--7"></div>
						<div className="flower__light flower__light--8"></div>
					</div>
					<div className="flower__line">
						<div className="flower__line__leaf flower__line__leaf--1"></div>
						<div className="flower__line__leaf flower__line__leaf--2"></div>
						<div className="flower__line__leaf flower__line__leaf--3"></div>
						<div className="flower__line__leaf flower__line__leaf--4"></div>
					</div>
				</div>

				<div className="flower flower--3">
					<div className="flower__leafs flower__leafs--3">
						<div className="flower__leaf flower__leaf--1"></div>
						<div className="flower__leaf flower__leaf--2"></div>
						<div className="flower__leaf flower__leaf--3"></div>
						<div className="flower__leaf flower__leaf--4"></div>
						<div className="flower__white-circle"></div>

						<div className="flower__light flower__light--1"></div>
						<div className="flower__light flower__light--2"></div>
						<div className="flower__light flower__light--3"></div>
						<div className="flower__light flower__light--4"></div>
						<div className="flower__light flower__light--5"></div>
						<div className="flower__light flower__light--6"></div>
						<div className="flower__light flower__light--7"></div>
						<div className="flower__light flower__light--8"></div>
					</div>
					<div className="flower__line">
						<div className="flower__line__leaf flower__line__leaf--1"></div>
						<div className="flower__line__leaf flower__line__leaf--2"></div>
						<div className="flower__line__leaf flower__line__leaf--3"></div>
						<div className="flower__line__leaf flower__line__leaf--4"></div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}
