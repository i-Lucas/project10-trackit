import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

import logo from '../../assets/img/logo.svg'
import Container from '../../assets/stylesheets/login'

export default function Login({ setToken }) {

    console.log('chamada Login')
    const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'

    const [data, setData] = useState({ email: '', password: '', error: undefined })
    const navigate = useNavigate();

    function HandleSubmit(e) {
        e.preventDefault()
        if (data.email.length < 5) {
            setData({ ...data, error: 'invalid email' })
        } else if (data.password.length < 5) {
            setData({ ...data, error: 'invalid password' })
        } else {
            const user = { email: data.email, password: data.password }
            axios.post(url, user).then(res => {
                setToken(res.data.token)
                navigate("/habits");
            }).catch(err => {
                setData({ ...data, error: 'user not registered' })
                console.log(err.response)
            })
        }
    }

    return (
        <Container>
            <form onSubmit={HandleSubmit}>
                <img src={logo} alt='logo' />
                <input type='text' placeholder='email' required
                    onChange={e => setData({ ...data, email: e.target.value })} />
                <input type='password' placeholder='password' required
                    onChange={e => setData({ ...data, password: e.target.value })} />
                {data.error !== undefined ? <h1>{data.error}</h1> : null}
                <button>Entrar</button>
                <Link to='/register'>Não tem uma conta? Cadastre-se!</Link>
            </form>
        </Container>
    )
}


// email: 'superbug@bugmaster.com',
// password: 'whiletrue'