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
          <a href="#">sair</a>
        </div>

        <img src="https://github.com/ricardodev10.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
