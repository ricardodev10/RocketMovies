import { FiArrowLeft } from "react-icons/fi";

import { Container } from "./styles";

export function ButtonText() {
  return (
    <Container>
      <a href="/">
        <FiArrowLeft />
        Voltar
      </a>
    </Container>
  );
}
