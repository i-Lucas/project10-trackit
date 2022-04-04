import { ThreeDots } from 'react-loader-spinner'
import { useState, useEffect } from 'react'
import Footer from '../Footer/'
import axios from 'axios'

import HabitsContainer from './style'
import del from '../../assets/img/del.svg'
import convert from './util'

export default function Habits({ token }) {

    // monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    const [habits, setHabits] = useState({

        habitsList: [],
        createNewHabit: false,
        Loading: true
    })

    useEffect(() => {

        const header = { headers: { "Authorization": `Bearer ${window.localStorage.getItem('#$321')}` } }
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

        axios.get(url, header).then(res => {
            const habitsList = res.data.map(habit => {
                return {
                    name: habit.name,
                    days: habit.days.map(day => convert(day, 'string')),
                    id: habit.id
                }
            })
            setHabits(h => ({ ...h, habitsList, Loading: false }))
        })
    }, [token])

    const anyhabits = <div className="nohabit">
        <h1>You don't have any habits registered yet. Add a habit to start tracking!</h1></div>

    return (

        <HabitsContainer>

            {habits.Loading ? <div className="loader"><ThreeDots color='#00BFFF' height={90} width={90} /></div> :
                <div className="my-habits"> <h1>My Habits</h1>
                    <button onClick={() => setHabits({ ...habits, createNewHabit: !habits.createNewHabit })}>+</button>
                </div>}

            {habits.createNewHabit ? <CreateHabit habits={habits} setHabits={setHabits} weekdays={daysOfWeek} /> : null}
            {habits.habitsList.length < 1 && !habits.Loading ? anyhabits : null}

            {habits.habitsList.map((habit, index) =>
                <UserHabits
                    key={index} id={habit.id}
                    name={habit.name} days={habit.days}
                    weekdays={daysOfWeek} habits={habits.habitsList}
                    setHabits={setHabits} />)}

            <Footer />
        </HabitsContainer>
    )
}

function CreateHabit({ habits, setHabits, weekdays }) {

    const [selected, setSelected] = useState({ list: [], name: '' })
    const days = selected.list.map(day => {
        return convert(day, 'number')
    })

    function check() {

        if (selected.name.length < 3) {
            return alert('habit must be at least 3 characters')
        } if (selected.list.length < 1) {
            return alert('habit must have at least 1 day')

        } else {

            const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
            const header = { headers: { "Authorization": `Bearer ${window.localStorage.getItem('#$321')}` } }

            axios.post(url, { name: selected.name, days: days }, header).then(res => {
                setHabits({
                    ...habits, habitsList: [...habits.habitsList,
                    { name: selected.name, days: selected.list, id: res.data.id }],
                    createNewHabit: !habits.createNewHabit
                })
            }).catch(err => {
                console.log('error when registering habit')
                console.log(err.response)
            })
        }
    }

    return (
        <div className="create-new-habit">
            <div className="input-text">
                <input type="text" placeholder="New Habit" required
                    onChange={e => setSelected({ ...selected, name: e.target.value })} />
            </div>
            <div className="days-of-week">
                {weekdays.map((day, index) =>
                    <DaysOfWeek key={index} day={day} setSelected={setSelected} selected={selected} />)}
            </div>
            <div className="cancel-save">
                <button onClick={() => setHabits({ ...habits, createNewHabit: !habits.createNewHabit })} >Cancel</button>
                <button onClick={() => check()} >Save</button>
            </div>
        </div>
    )
}

function DaysOfWeek({ day, setSelected, selected }) {

    function check(day) {

        if (selected.list.includes(day)) {
            setSelected({ ...selected, list: selected.list.filter(item => item !== day) })
        } else {
            setSelected({ ...selected, list: [...selected.list, day] })
        }
    }

    const color = selected.list.includes(day) ? '#CFCFCF' : '#FFFFFF'
    const firstLetter = day.slice(0, 1)

    return <button onClick={() => check(day)} style={{ background: color }} >{firstLetter}</button>
}

function UserHabits({ id, name, days, weekdays, habits, setHabits }) {

    function remove(id) {

        const header = { headers: { "Authorization": `Bearer ${window.localStorage.getItem('#$321')}` } }
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
        axios.delete(url, header).then(res => {
            setHabits({ ...habits, habitsList: habits.filter(habit => habit.id !== id) })

        }).catch(err => {
            console.log(err.response)
        })
    }

    return (
        <div className="user-habits">
            <div className="habit-name">
                <h1>{name}</h1>
                <button onClick={() => remove(id)}><img src={del} alt="" /></button>
            </div>
            <div className="selected-days">
                {weekdays.map((week, index) => <SelectedDays key={index} week={week} selected={days} />)}
            </div>
        </div>
    )
}

function SelectedDays({ week, selected }) {

    const uniqueDays = [...new Set(selected)]
    const uniqueDaysArray = [...new Set(uniqueDays)]
    const isSelected = uniqueDaysArray.includes(week)
    const firstLetter = week.slice(0, 1)
    const color = isSelected ? '#CFCFCF' : '#FFFFFF'
    return <button style={{ background: color }}>{firstLetter}</button>
}