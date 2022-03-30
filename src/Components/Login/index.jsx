import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Login({ setToken }) {

    console.log('chamada Login')
    const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
    const body = {

        email: 'superbug@bugmaster.com',
        password: 'whiletrue'
    }

    useEffect(() => {
        axios.post(url, body).then(res => {
            console.log('login efetuado token: ', res.data.token)
            console.log(res.data)
            setToken(res.data.token)
        }).catch(err => {
            console.log('erro no login')
            console.log(err.response)
        })
    }, [url])

    return (
        <>
            <h1>Login</h1>
            <ul>
                <li><Link to='/habits'>Habitos</Link></li>
                <li><Link to='/today'>Hoje</Link></li>
                <li><Link to='/historic'>Histórico</Link></li>
                <li><Link to='/today'>Today</Link></li>
            </ul>     
        </>
    )
}