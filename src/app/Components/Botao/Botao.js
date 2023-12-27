import { Children } from "react";
import { BotaoContainer } from "./Botao.style";

export default function Botao({children}) {
	return(
		<BotaoContainer>{children}</BotaoContainer>
	)
}