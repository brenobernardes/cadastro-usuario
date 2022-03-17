import React from "react";

export default function Lawyer () {
    var list = function() {
        var lawyers = localStorage.getItem('lawyers');
        return JSON.parse(lawyers);
    }
    return (
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
    );
}