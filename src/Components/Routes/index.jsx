import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Login from '../Login'
import Register from '../Register'
import Habits from '../Habits'
import Today from '../Today'
import Historic from '../Historic'
import Header from '../Header'

export default function AppRoutes() {

    const [info, setInfo] = useState({

        token: null,
        started: true,
        img: undefined
    })

    return (

        <BrowserRouter>
            {info.started ? <Header userimg={info.img} /> : null}
            <Routes>
                <Route path='/' element={<Login setInfo={(info) => setInfo(info)} />} />
                <Route path='/register' element={<Register />} />
                <Route path='/habits' element={<Habits token={info.token} />} />
                <Route path='/today' element={<Today token={info.token} />} />
                <Route path='/historic' element={<Historic token={info.token} />} />
            </Routes>
        </BrowserRouter>
    )
}