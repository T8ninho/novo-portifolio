import Descricao from './Components/Descricoes/index.js';
import SobreMim from './Components/SobreMim.js';
import './Geral.styles.css';

export default function Geral() {
	return(
		<div className='containerGeral '>
			<hr />
			<SobreMim />
			<hr />
			<Descricao />
			<hr />
			<SobreMim />
			<hr />
		</div>
	)
}