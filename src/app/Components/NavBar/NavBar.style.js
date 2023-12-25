import styled from 'styled-components'

export const Header = styled.header`
	width: 100%;
	z-index: 1;
	position: fixed;
	display: flex;
	justify-content: center;
	left: 0;
	background: rgba(2, 10, 124, 0.226);
	box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
	backdrop-filter: blur( 13.5px );
`
export const HeaderConteudo = styled.div`
	width: 80vw;
	display: flex;
	justify-content: space-between;
`
export const HeaderImagem = styled.img`
	height: 100px;
`
export const HeaderMenu = styled.nav`
	display: flex;
	gap: 20px;
	align-items: center;
	width: 70%;
	justify-content: space-between;
`
export const HeaderMenuItem = styled.a`
	font-size: 18px;
	transition: .3s;
	text-transform: uppercase;
`
