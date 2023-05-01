import { FiArrowLeft, FiCamera, FiMail, FiLock, FiUser } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
          Voltar
        </a>
      </header>

      <Form>
        <Avatar>
            <img src="https://github.com/ricardodev10.png" alt="Foto do usuário" />
            
            <label htmlFor="avatar">
                <FiCamera />

                <input id="avatar" type="file" />
            </label>
        </Avatar>

        <Input 
            placeholder="Ricardo Junior" 
            type="text" 
            icon={FiUser} 
        />

        <Input 
            placeholder="ricardodev10@yahoo.com" 
            type="text" 
            icon={FiMail} 
        />

        <Input 
            placeholder="Senha atual" 
            type="password" 
            icon={FiLock} 
        />

        <Input 
            placeholder="Nova senha" 
            type="password" 
            icon={FiLock} 
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
