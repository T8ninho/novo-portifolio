import Perfil from '../../../../../public/imagens/perfil.jpg'
import './index.styles.css'

export default function SobreMim() {
	return(
		<div className="container">
			<img src={Perfil.src} alt='Foto que retrata o rosto do autor do site.'/>
			<div className='containerTexto'>
				<h1>Olá, me chamo <span>Antonio Vitor</span>...</h1>
				<br />
				<p>Sou estudante de desenvolvimento full stack, com foco em design front-end, residente da cidade e Cariacica no estado do Espírito Santo. Trabalho atualmente em um ambiente hospitalar.
				</p>
				<br />
				<p><span>Meu Objetivo</span>: Ingressar no ramo da programação, para poder aprimorar minhas habilidades, bem como adiquirir experiencias no mercado de trabalho nesta área que tanto me interessa.</p>
			</div>
		</div>
	)
}