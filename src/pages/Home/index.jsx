import { FiPlus } from "react-icons/fi"
import { Link } from "react-router-dom";

import { Container, Button } from "./styles";
import { Header } from "../../components/Header";
import { Resume } from "../../components/Resume";

export function Home() {
    return (
        <Container>
            <Header />
            <main>
                <div>
                    <h1>Meus Filmes</h1>
                    <Button>
                        <Link to="/createmovie"><FiPlus />Adicionar filme</Link>
                    </Button>
                </div>
                
                <Resume />
                <Resume />
                <Resume />
            </main>
        </Container>
    )
}