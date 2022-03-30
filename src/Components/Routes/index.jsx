import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Login from '../Login'
import Register from '../Register'
import Habits from '../Habits'
import Today from '../Today'
import Historic from '../Historic'

export default function AppRoutes() {

    const [token, setToken] = useState(null)

    if (token !== null) { console.log('token no AppRoutes: ', token) }
    else { console.log('token no AppRoutes: null') }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login setToken={(token) => setToken(token)} />} />
                <Route path='/register' element={<Register />} />
                <Route path='/habits' element={<Habits token={token} />} />
                <Route path='/today' element={<Today token={token} />} />
                <Route path='/historic' element={<Historic token={token} />} />
            </Routes>
        </BrowserRouter>
    )
}