import { Container, Content, Logo } from "./styles";
import logoImg from "../../assets/logo.png";

export function Header() {
  return (
    <Container>
      <Content>
        <Logo src={logoImg} alt="Cashin" />
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
}
