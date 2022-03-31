import { useState } from 'react'
import axios from 'axios'

// import { useNavigate } from 'react-router-dom'
import Container from './style'

export default function Habits({ token }) {

    // const navigate = useNavigate();
    // falta fazer um map nos habitos

    const [habits, setHabit] = useState({ name: '', days: [] })
    const [createHabit, setCreate] = useState(false)

    const days = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D']

    console.log(habits.days)
    // const [list, setDays] = useState([])

    function checkData() {
        if (habits.name.length < 3) {
            return alert('habit must be at least 3 characters')
        }
        if (habits.days.length < 1) {
            return alert('habit must have at least 1 day')
        } else {

            let secret = Number
            if (window.localStorage.getItem('#$321') !== null) {
                secret = window.localStorage.getItem('#$321')
            } else { secret = token }

            const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
            const header = { headers: { "Authorization": `Bearer ${secret}` } }

            axios.post(url, { name: habits.name, days: habits.days }, header).then(res => {
                console.log('habit registered successfully')
                console.log(res.data)
                setCreate(!createHabit)
            }).catch(err => {
                console.log('error when registering habit')
                console.log(err.response)
            })
        }
    }

    const createContainer =
        <div className='new-habit'>

            <div className='habit-name'>
                <input type='text' placeholder='habit name' required
                    onChange={e => setHabit({ ...habits, name: e.target.value })} />
            </div>

            <div className='habit-day'>
                {days.map((day, index) =>
                    <Day day={day} setDays={setHabit} list={habits} key={index} daynumber={index + 1} />
                )}
            </div>
            <div className="confirm">
                <button onClick={() => checkData()}>Confirm</button>
                <button onClick={() => setCreate(!createHabit)}>Cancel</button>
            </div>

        </div>

    return (
        <Container>
            <div>
                <h1>My Habits</h1>
                <button onClick={() => setCreate(!createHabit)}>+</button>
            </div>
            {createHabit ? createContainer : null}
            {habits.length === 0 ? <h2>{'You don`t have any habits registered yet. Add a habit to start tracking!'}</h2> : null}
        </Container>
    )
}

function Day({ day, setDays, list, daynumber }) {

    const [dayinfo, setInfo] = useState({ selected: false })

    function checkDay() {

        if (!dayinfo.selected) {
            setInfo({ selected: true })
            setDays({ ...list, days: [...list.days, daynumber] })
            console.log('selected')
        } else {
            setInfo({ selected: false })
            const newDays = list.days.filter(item => item !== daynumber)
            setDays({ ...list, days: newDays })
            console.log('unselected')
        }
    }

    return <button onClick={() => checkDay()} style={{ background: dayinfo.selected ? '#CFCFCF' : '#FFFFFF' }} >{day}</button>
}

// <button onClick={() => navigate('/today')}>today</button>