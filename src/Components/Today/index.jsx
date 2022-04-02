import { useEffect } from 'react'
import Footer from '../Footer/'
import axios from 'axios'

export default function Today({ token }) {

    // if (token !== null) { console.log('token no Today: ', token) }
    // const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'

    // useEffect(() => {

    //     const header = {
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     }

    //     axios.get(url, header).then(res => {
    //         console.log('habitos recuperados com sucesso')
    //         console.log(res.data)
    //     }).catch(err => {
    //         console.log('erro ao recuperar habitos')
    //         console.log(err.response)
    //     })

    // }, [token])

    return (
        <>
            <h1>Today</h1>
            <Footer />
        </>
    )
}


//  background-color: #E5E5E5;