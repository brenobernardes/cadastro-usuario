import React from "react";
import {Link} from 'react-router-dom';

function Home () {
    return(
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/registro">Registro</Link>
                    </li>
                    <li>
                        <Link to="/cadastro">Cadastrados</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;