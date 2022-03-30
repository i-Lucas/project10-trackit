import { useEffect } from 'react'
import axios from 'axios'

export default function Register() {

    const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'

    useEffect(() => {

        const body = {

            email: 'superbug@bugmaster.com',
            name: 'superbug',
            image: 'https://avatars2.githubusercontent.com/u/5395908?s=460&v=4',
            password: 'whiletrue'
        }

        axios.post(url, body).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err.response)
        })

    }, [url])


    return (
        <h1>Register</h1>
    )
}