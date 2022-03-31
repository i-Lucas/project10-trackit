import Container from '../../assets/stylesheets/login'
import { Link, useNavigate } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'
import logo from '../../assets/img/logo.svg'
import Verification from '../Verification'
import { useState } from 'react'
import axios from 'axios'

export default function Register() {

    const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '', password: '',
        name: '', photo: '',
        error: undefined,
        success: undefined,
        tip: undefined
    })

    function HandleSubmit(e) {
        e.preventDefault()
        if (!Verification(data.email, undefined, undefined)) {
            setData({ ...data, error: 'invalid email', tip: 'your email must have the format email@example.com' })
        
        } else if (!Verification(undefined, data.password, undefined)) {
            return setData({ ...data, error: 'invalid password', tip: 'password must contain at least one uppercase character, one lowercase character and 5 numbers' })
        } else if (data.name.length < 5) {
            return setData({ ...data, error: 'invalid username', tip: 'your username must be at least 5 characters' })
        
        } else if (!Verification(undefined, undefined, data.photo)) {
            return setData({ ...data, error: 'invalid url', tip: 'you must enter a valid image url. supported formats: jpg png jpeg' })
        } else {
            const user = { email: data.email, name: data.name, image: data.photo, password: data.password }
            axios.post(url, user).then(res => {
                console.log(res)
                setTimeout(() => {
                    navigate("/")
                }, 1500)
                setData({ ...data, success: 'account registered successfully !', error: null })
            }).catch(err => {
                setData({ ...data, error: 'error in registration', tip: 'try again using other data'})
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
                <input type='text' placeholder='password' required
                    onChange={e => setData({ ...data, password: e.target.value })} />
                <input type='text' placeholder='username' required
                    onChange={e => setData({ ...data, name: e.target.value })} />
                <input type='text' placeholder='photo' required
                    onChange={e => setData({ ...data, photo: e.target.value })} />
                {data.error !== undefined ? <h1>{data.error}</h1> : null}
                <button>
                    {data.error === null ? <ThreeDots color='#FFFFFF' height={13} width={50} /> : 'Register'}
                </button>
                <Link to='/'>Already have an account? Log in!</Link>
                {data.success !== undefined ? <h2>{data.success}</h2> : null}
                {data.tip !== undefined && data.error !== null ? <h3>{data.tip}</h3> : null}
            </form>
        </Container>
    )
}