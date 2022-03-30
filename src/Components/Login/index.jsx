import Container from '../../assets/stylesheets/login'
import { Link, useNavigate } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'
import logo from '../../assets/img/logo.svg'
import verification from '../Verification'
import { useState } from 'react'
import axios from 'axios'

export default function Login({ setToken }) {

    const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
    const [data, setData] = useState({ email: '', password: '', error: undefined, tip: undefined })
    const navigate = useNavigate();

    function HandleSubmit(e) {
        e.preventDefault()
        if (!verification(data.email, undefined, undefined)) {
            setData({ ...data, error: 'invalid email', tip: 'your email must have the format email@example.com' })
        } else if (!verification(undefined, data.password, undefined)) {
            setData({ ...data, error: 'invalid password', tip: 'password must contain at least one uppercase character, one lowercase character and 5 numbers' })
        } else {
            const user = { email: data.email, password: data.password }
            axios.post(url, user).then(res => {
                setToken(res.data.token)
                setData({ ...data, error: 'success' })
                setTimeout(() => { navigate('/habits') }, 1500)
            }).catch(err => {
                setData({ ...data, error: 'invalid username and/or password', tip: undefined })
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
                {data.error !== undefined && data.error !== 'success' ? <h1>{data.error}</h1> : null}
                <button>
                    {data.error === 'success' ? <ThreeDots color='#FFFFFF' height={13} width={50} /> : 'Get in'}
                </button>
                <Link to='/register'>Don't have an account? Register !</Link>
                {data.tip !== undefined ? <h3>{data.tip}</h3> : null}
            </form>
        </Container>
    )
}

// email: 'superbug2@bugmaster.com',
// password: 'WhileTrue123'