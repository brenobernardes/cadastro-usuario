import React, {useState} from "react";
import { Link } from "react-router-dom";
import './register.css'

export default function Register () {

    const [user, setUser] = useState({name:"", email:"", phone:""});

    let handleChangeInput = (e) => {
        e.preventDefault();
        var lawyers = JSON.parse(localStorage.getItem('lawyers'));
        if(lawyers == null) {
            lawyers = [];
        }
        lawyers.push(user);
        localStorage.setItem('lawyers', JSON.stringify(lawyers));

        setUser({name:"", email:"", phone:""})
        console.log(user)
    }

    return (

        <div className="registerPage">
            <div className="containerRegister">
                <h1>Cadastro de Advogados</h1>
                <form className='formBox' onSubmit={handleChangeInput}>
                    <div className='field'>
                        <label>Nome Completo</label>
                        <input className="inputForm" type="text" name="Name" placeholder='John Doe' value={user.name} onChange={e => setUser({...user, name: e.target.value})}/>
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input className="inputForm" type="text" name="Email" placeholder='Email' value={user.email} onChange={e => setUser({...user, email: e.target.value})}/>
                    </div>
                    <div className='field'>
                        <label>Telefone</label>
                        <input className="inputForm" type="text" name="Phone" placeholder='Telefone' value={user.phone} onChange={e => setUser({...user, phone: e.target.value})}/>
                    </div>
                    <button className='ui secondary button'>Enviar</button>
                </form> 

                <Link to="/">Voltar</Link>
            </div>
        </div>        
    );
}