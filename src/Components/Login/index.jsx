import Container from '../../assets/stylesheets/login'
import { Link, useNavigate } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'
import logo from '../../assets/img/logo.svg'
import { useState, useEffect } from 'react'
import Verification from '../Verification'
import axios from 'axios'

export default function Login({ setInfo }) {

    const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
    const [data, setData] = useState({ email: '', password: '', error: undefined, tip: undefined, keep: false })
    const navigate = useNavigate();

    useEffect(() => {

        if (window.localStorage.getItem('#$123') === 'true') {
            setData(data => ({ ...data, error: 'success' }))
            required()
            function required() {
                const secret = window.localStorage.getItem('#$321')
                const img = window.localStorage.getItem('#$fff')
                setTimeout(() => {
                    setInfo({ token: secret, started: true, img: img })
                    navigate('/habits')
                }, 1500)
            }
        }
    }, [setData, navigate, setInfo])

    function HandleSubmit(e) {

        e.preventDefault()
        if (!Verification(data.email, undefined, undefined)) {
            setData({
                ...data, error: 'invalid email', tip:
                    'your email must have the format email@example.com'
            })
        } else if (!Verification(undefined, data.password, undefined)) {
            setData({
                ...data, error: 'invalid password',
                tip: 'password must contain at least one uppercase character, one lowercase character and 5 numbers'
            })
        } else {

            axios.post(url, { email: data.email, password: data.password }).then(res => {

                setData({ ...data, error: 'success' })

                if (data.keep) {
                    window.localStorage.setItem('#$123', 'true')
                    window.localStorage.setItem('#$321', res.data.token)
                    window.localStorage.setItem('#$fff', res.data.image)
                } else {
                    window.localStorage.setItem('#$123', 'false')
                }

                setTimeout(() => {
                    setInfo({ token: res.data.token, started: true, img: res.data.image })
                    navigate('/habits')
                }, 1500)

            }).catch(err => {
                setData({ ...data, error: 'invalid username or password', tip: undefined })
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
                <button>{data.error === 'success' ? <ThreeDots color='#FFFFFF' height={13} width={50} /> : 'Get in'}</button>

                <Link to='/register'>Don't have an account? Register !</Link>
                {data.tip !== undefined ? <h3>{data.tip}</h3> : null}

                <h4>keep me connected</h4>
                <input onClick={() => data.keep ?
                    setData({ ...data, keep: false }) :
                    setData({ ...data, keep: true })}
                    type="checkbox" className='check' />
            </form>
        </Container>
    )
}

// email: 'superbug2@bugmaster.com',
// password: 'WhileTrue123'