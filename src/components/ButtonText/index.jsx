import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export function ButtonText() {
  return (
    <Container>
      <Link to="/">
        <FiArrowLeft />
        Voltar
      </Link>
    </Container>
  );
}
