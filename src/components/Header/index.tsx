import { Container, Content, Logo } from "./styles";
import logoImg from "../../assets/logo.png";

// Define o elemento raiz do aplicativo


interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}:HeaderProps) {
  return (
    <Container>
      <Content>
        <Logo src={logoImg} alt="Cashin" />
        <button onClick={onOpenNewTransactionModal} type="button">
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
