import { Link } from "react-router-dom";

import { Container, Profile } from "./styles";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <strong>Ricardo Junior</strong>
          <Link to="/">sair</Link>
        </div>

        <Link to="/profile"><img src="https://github.com/ricardodev10.png" alt="Foto do usuário" /></Link>
      </Profile>
    </Container>
  );
}
