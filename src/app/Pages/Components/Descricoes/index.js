import ProgressBar from '../ProgressBar'
import './index.styles.css'
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faEnvelope, faLocationDot, faUserGraduate, faSquare, faFillDrip } from '@fortawesome/free-solid-svg-icons'

export default function Descricao() { 
	function Item({children, icone}) {
		return(
			<div className='itemDescricao'>
				<FontAwesomeIcon 
					icon={icone ? icone : faSquare} 
					className='itemIcone' 
					style={icone ? null : {color: 'transparent'}} 
				/>
				{children}
			</div>
		)
	} 

	return(
		<div className='containerDescricao'>
			<div>
				<h1>Contato:</h1>
					<Item icone={faPhoneVolume}>+55 27 99602-8557 (WhatsApp)</Item>
					<br />
					<Item icone={faEnvelope}>tonisantos.contato@gmail.com</Item>
					<br />
					<Item icone={faLocationDot}>Cariacica - Espírito Santo - Brasil</Item>
					<br />
				
				<h1>Skills:</h1>
					<Item icone={faFillDrip}><ProgressBar value={40} /></Item>
					<br />
					<Item icone={faFillDrip}><ProgressBar value={30} /></Item>
					<br />
					<Item icone={faFillDrip}><ProgressBar value={80} /></Item>
			</div>
			<div>
				<h1>Formação Acadêmica:</h1>
					<Item>Ensino médio(2º Grau),</Item>
					<Item icone={faUserGraduate}>EEEFM Néa Salles Nunes Pereira em Espírito Santo</Item>
					<Item>01/2015 - 12/2017</Item>
					<br />
					<Item>Desenvolvimento Full Stack (Superior Tecnólogo)</Item>
					<Item icone={faUserGraduate}>Estácio de Sá (1º Período)</Item>
					<Item>Previsão de conclusão: 2025</Item>
			</div>
		</div>
	)
}