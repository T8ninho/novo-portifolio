import ProgressBar from '../ProgressBar'
import './index.styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function Descricao() { 

	return(
		<div className='containerDescricao'>
			<FontAwesomeIcon icon={faCheckCircle} />
			<div className='SubContainer'>
				<ul>
					<h1>Contato:</h1>
					<li>+55 27 99602-8557 (WhatsApp)</li>
					<br />
					<li>tonisantos.contato@gmail.com</li>
					<br />
					<li>Cariacica - Espírito Santo - Brasil</li>
				</ul>
					<br />
				<ul>
					<h1>Skills:</h1>
					<li><ProgressBar  value={30} /></li>
					<li><ProgressBar  value={30} /></li>
					<li><ProgressBar  value={30} /></li>
				</ul>
			</div>
			<div className='SubContainer'>
				<ul>
					<h1>Fromação Acadêmica:</h1>
						<li style={{listStyle: 'none'}}>Ensino médio(2º Grau),</li>
						<li>EEEFM Néa Salles Nunes Pereira em Espírito Santo</li>
						<li style={{listStyle: 'none'}}>01/2015 - 12/2017</li>
					<br />
						<li style={{listStyle: 'none'}}>Desenvolvimento Full Stack (Superior Tecnólogo)</li>
						<li>Estácio de Sá (1º Período)</li>
						<li style={{listStyle: 'none'}}>Previsão de conclusão: 2025</li>
				</ul>
			</div>
		</div>
	)
}