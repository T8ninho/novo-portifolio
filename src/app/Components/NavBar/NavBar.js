import { Header, HeaderConteudo, HeaderImagem, HeaderMenu, HeaderMenuItem } from "./NavBar.style";

export default function NavBar() {
	return(
		<Header>
			<HeaderConteudo>
				<HeaderImagem src="https://images.vexels.com/media/users/3/145827/isolated/preview/357f06ecbaaa77d750259c459c0ed55f-ilustracao-de-pedra-redonda.png" />
				<HeaderMenu>
					<HeaderMenuItem href="#">Início</HeaderMenuItem>
					<HeaderMenuItem href="#">Sobre mim</HeaderMenuItem>
					<HeaderMenuItem href="#">Portifólio</HeaderMenuItem>
					<HeaderMenuItem href="#">Serviços</HeaderMenuItem>
					<HeaderMenuItem href="#">Experiência</HeaderMenuItem>
					<HeaderMenuItem href="#">Contato</HeaderMenuItem>
				</HeaderMenu>
			</HeaderConteudo>
		</Header>
	)
}