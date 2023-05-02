import { FiPlus, FiX } from "react-icons/fi";

import { Container, TextArea } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function CreateMovie() {
  return (
    <Container>
      <Header />
      <main>
        <ButtonText />

        <h1>Novo filme</h1>

        <div className="inputs">
          <Input 
            type="text" 
            placeholder="Título" 
          />

          <Input 
            type="number" 
            placeholder="Sua nota (de 0 a 5)" 
          />
        </div>

        <TextArea 
          cols="30" 
          rows="10" 
          placeholder="Observações" 
        />

        <h2>Marcadores</h2>

        <div className="marcadores">
          <div>
            <span>
              React <FiX />
            </span>
            <span>
              Novo Marcador <FiPlus />
            </span>
          </div>
        </div>

        <div className="buttons">
          <Button title="Excluir filme" />
          <Button title="Salvar alterações" />
        </div>
      </main>
    </Container>
  );
}
