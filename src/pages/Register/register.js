import React, {useState} from "react";

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

        <div>
            <form className='ui form' onSubmit={handleChangeInput}>
                <div className='field'>
                    <label>Nome Completo</label>
                    <input type="text" name="Name" placeholder='John Doe' value={user.name} onChange={e => setUser({...user, name: e.target.value})}/>
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input type="text" name="Email" placeholder='Email' value={user.email} onChange={e => setUser({...user, email: e.target.value})}/>
                </div>
                <div className='field'>
                    <label>Telefone</label>
                    <input type="text" name="Phone" placeholder='Telefone' value={user.phone} onChange={e => setUser({...user, phone: e.target.value})}/>
                </div>
                <button className='ui secondary button'>Enviar</button>
            </form> 

            <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
            </div>
        </div>        
    );
}