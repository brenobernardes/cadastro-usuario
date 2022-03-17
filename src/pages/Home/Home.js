import React from "react";
import {Link} from 'react-router-dom';
import './home.css';

function Home () {
    return(
        <div className="homePage">
            <div className="containerHome">
                <h1>Página Inicial</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/registro" className="list">Cadastrar Advogado</Link>
                        </li>
                        <li>
                            <Link to="/cadastro" className="list">Advogados Cadastrados</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Home;