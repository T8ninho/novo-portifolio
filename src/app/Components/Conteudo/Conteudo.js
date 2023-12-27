import Botao from "../Botao/Botao";
import { ContainerConteudo, SubConteudo, ConteudoPreTitulo, ConteudoTitulo } from "./Conteudo.style";

export default function Conteudo() {
	return(
		<ContainerConteudo>
			<SubConteudo>
				<ConteudoPreTitulo>Eu sou um</ConteudoPreTitulo>
				<div>
					<ConteudoTitulo>Dev.</ConteudoTitulo>
					<ConteudoTitulo>FRONT-END</ConteudoTitulo>
				</div>
				<Botao>Projetos Anteriores</Botao>
			</SubConteudo>
		</ContainerConteudo>
	)
}