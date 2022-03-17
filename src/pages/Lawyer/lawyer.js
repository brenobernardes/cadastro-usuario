import React from "react";
import { Link } from "react-router-dom";

export default function Lawyer () {
    var list = function() {
        var lawyers = localStorage.getItem('lawyers');
        return JSON.parse(lawyers);
    }
    return (
        <div>
            <h1>Advogados Cadastrados</h1>
            <ul>
                {list().map(function(lawyer, i) { return (
                    <li key={i}>
                        <p>
                            {lawyer.name}<br />
                            {lawyer.email}<br />
                            {lawyer.phone}
                        </p>
                    </li>
                )})}
            </ul>

            <Link to="/">Voltar</Link>
        </div>
    );
}