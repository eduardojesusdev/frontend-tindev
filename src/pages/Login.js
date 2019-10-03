import React, {useState} from 'react';
import logo from '../assets/logo.png';
import './Login.css';
import api from '../services/api';

export default function Login({history}) {
    const [username, setUsername] = useState('');
    async function handleSubmit(e){
        e.preventDefault();
        const response = await api.post('/devs', {
            username,
        });
        const {_id} = response.data;
        console.log(_id);
        history.push(`/dev/${_id}`);
    }
    return (
      <div className="login-container">
            <img src={logo} alt="Tindev" />
          <form onSubmit={handleSubmit} >
            <input 
                placeholder="Digite seu usuário no Github" 
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
            <button type="submit">Enviar</button>
          </form>
      </div>
    );
  }