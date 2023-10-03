import Perfil from '../../../../../public/imagens/perfil.jpg'
import './index.styles.css'

export default function SobreMim() {
	return(
		<div className="containerSobreMim">
			<div className='containerImg'>
				<img src={Perfil.src} alt='Foto que retrata o rosto do autor do site.'/>
			</div>
			<div className='containerSobreMimTexto'>
				<div>
					<h1>Olá, me chamo <span>Antonio Vitor</span>...</h1>
					<br />
					<p>Eu sou um estudante de desenvolvimento full stack, com uma paixão pelo design front-end. <br /> Atualmente, moro em Cariacica, no estado do Espírito Santo, e atualmente estou trabalhando em um ambiente hospitalar.
					</p>
					<br />
					<p><span>Meu Objetivo</span>: Entrar no mundo da programação, com o propósito de aperfeiçoar minhas habilidades e acumular experiência no mercado de trabalho neste campo que me fascina profundamente.</p>
				</div>
			</div>
		</div>
	)
}