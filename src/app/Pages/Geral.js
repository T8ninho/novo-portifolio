import Descricao from './Components/Descricoes/index.js';
import SobreMim from './Components/SobreMim.js';
import Titulo from './Components/Titulo/index.js';
import './Geral.styles.css';

export default function Geral() {
	return(
		<div className='containerGeral '>
			<Titulo />
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