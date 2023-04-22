import { FiPlus } from "react-icons/fi"

import { Container, Button } from "./styles";
import { Header } from "../../components/Header";

export function Home() {
    return (
        <Container>
            <Header />
            <main>
                <div>
                    <h1>Meus Filmes</h1>
                    <Button>
                        <FiPlus />Adicionar filme
                    </Button>
                </div>
            </main>
        </Container>
    )
}