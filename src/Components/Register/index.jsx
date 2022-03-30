import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

import logo from '../../assets/img/logo.svg'
import Container from '../../assets/stylesheets/login'

export default function Register() {

    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
        name: '',
        photo: '',
        error: undefined,
        success: undefined
    })

    const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'

    function HandleSubmit(e) {
        e.preventDefault()
        if (data.email.length < 5) {
            setData({ ...data, error: 'invalid email' })
        } else if (data.password.length < 5) {
            setData({ ...data, error: 'invalid password' })
        } else if (data.name.length < 5) {
            setData({ ...data, error: 'invalid username' })
        } else if (data.photo.length < 5) {
            setData({ ...data, error: 'invalid photo' })
        } else {
            const user = { email: data.email, name: data.name, image: data.photo, password: data.password }
            axios.post(url, user).then(res => {
                console.log(res)

                setTimeout(() => {
                    navigate("/")
                }, 2000)

                setData({ ...data, success: 'account registered successfully !' })
            }).catch(err => {
                setData({ ...data, error: 'error in registration' })
                console.log(err.response)
                console.log(data)
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
                <input type='text' placeholder='username' required
                    onChange={e => setData({ ...data, name: e.target.value })} />
                <input type='text' placeholder='photo' required
                    onChange={e => setData({ ...data, photo: e.target.value })} />
                {data.error !== undefined ? <h1>{data.error}</h1> : null}
                <button>Cadastrar</button>
                <Link to='/'>Já tem uma conta? Faça login!</Link>
                {data.success !== undefined ? <h2>{data.success}</h2> : null}
            </form>
        </Container>
    )
}