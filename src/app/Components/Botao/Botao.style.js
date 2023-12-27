import styled from 'styled-components'

export const BotaoContainer = styled.a`
	background: linear-gradient(90deg, #ffd000, #ff6600);
	padding: 30px 40px;
	border-radius: 10px;
	text-align: center;
	transition: .3s;
	color: #fff;
	box-shadow: rgba(0, 0, 0, 0.8) 0px 3px 4px, rgba(0, 0, 0, 0.7) 0px 8px 13px -3px, rgba(0, 0, 0, 0.6) 0px -5px 0px 2px inset;

	&:hover {
    	background: linear-gradient(90deg, #ff6600, #ffd000);
		box-shadow: rgba(0, 0, 0, 0.8) 0px 1px 4px,  rgba(0, 0, 0, 0.7) 0px 6px 13px -3px, rgba(0, 0, 0, 0.6) 0px -3px 0px inset;
  	}
`