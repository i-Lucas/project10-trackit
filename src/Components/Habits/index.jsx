// import { useEffect } from 'react'
// import axios from 'axios'

// import { useNavigate } from 'react-router-dom'
import Container from './style'

export default function Habits({ token }) {

    // const navigate = useNavigate();

    if(window.localStorage.getItem('#$321') !== null) {
        console.log('token ', window.localStorage.getItem('#$321'))
    }

    // console.log('chamada Habits')
    // const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

    // useEffect(() => {

    //     const body = {
    //         name: "Estudar",
    //         days: [1, 3, 5]
    //     }
    
    //     const header = {
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     }

    //     axios.post(url, body, header).then(res => {
    //         console.log('habito cadastrado com sucesso')
    //         console.log(res.data)
    //     }).catch(err => {
    //         console.log('erro ao cadastrar habito')
    //         console.log(err.response)
    //     })

    // }, [token])

    // falta criar um estado para controlar a cor do botao, ao clicar deve ficar habilitado, e quando clicar de novo
    // deve desabilitar, e tambem tem que criar um array pra armazenar o numero de cada botao
    // depois pegar o input value e mandar pra api. 
    // e fazer um map nos habitos

    const habits = 0
    const msg = 'You don`t have any habits registered yet. Add a habit to start tracking!'

    let enabled = false
    let x = enabled ? '#CFCFCF' : '#FFFFFF'

    const create = 
    <div className='new-habit'>
        <div className='habit-name'>
            <input type='text' placeholder='habit name' />
        </div>
        <div className='habit-day'>
            <button style={{background: '#CFCFCF'}}>D</button> 
            <button style={{background: x}}>S</button> 
            <button>T</button> 
            <button>Q</button> 
            <button>Q</button> 
            <button>S</button> 
            <button>S</button> 
        </div>
        <div className="confirm">
            <button>Confirm</button>
            <button>Cancel</button>
        </div>
    </div>

    return (
        <Container>
            <div>
                <h1>My Habits</h1>
                <button>+</button>
            </div>
                {habits === 0 ? create : null}
                {habits === 0 ? <h2>{msg}</h2> : null}
        </Container>
    )
}

// <button onClick={() => navigate('/today')}>today</button>