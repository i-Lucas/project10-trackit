import { useEffect } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

export default function Habits({ token }) {

    console.log('chamada Habits')
    const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

    useEffect(() => {

        const body = {
            name: "Estudar",
            days: [1, 3, 5]
        }
    
        const header = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        axios.post(url, body, header).then(res => {
            console.log('habito cadastrado com sucesso')
            console.log(res.data)
        }).catch(err => {
            console.log('erro ao cadastrar habito')
            console.log(err.response)
        })

    }, [token])

    const navigate = useNavigate();

    return (
        <>
        <h1>habits</h1>
       <button onClick={() => navigate('/today')}>today</button>
    </>
    )
}