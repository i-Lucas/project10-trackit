import { ThreeDots, TailSpin } from 'react-loader-spinner'
import { useState, useEffect } from 'react'
import axios from 'axios'

import HabitsContainer from './style'
import del from '../../assets/img/del.svg'
import convert from './util'

/* 

    O QUE FALTA FAZER 

        - Colocar animacao de carregando ao fazer a requisicao das informacoes no servidor
        - Colocar animacao no botao quando criar um novo habito
        - Ao clicar em Salvar, precisa fechar a janela de criar um novo habito
*/

export default function Habits({ token }) {

    // monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    const [habits, setHabits] = useState({

        habitsList: [],
        createNewHabit: false
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
            setHabits(h => ({ ...h, habitsList }))
        })
    }, [token])

    // let control = habits.habitsList.length < 1 ? true : false
    const msg = `You don't have any habits registered yet. Add a habit to start tracking!`
    // <ThreeDots color="#00BFFF" height={15} width={50} />

    return (

        <HabitsContainer>

            <div className="my-habits"> <h1>My Habits</h1>
                <button onClick={() => setHabits({ ...habits, createNewHabit: !habits.createNewHabit })}>+</button>
                {/* { control ? msg
                    : <button onClick={() => setHabits({ ...habits, createNewHabit: !habits.createNewHabit })}>+</button>} */}
            </div>

            {/* { control ? <div className="loader"><TailSpin color='#00BFFF' height={90} width={90} /></div> : null} */}
            {habits.createNewHabit ? <CreateHabit habits={habits} setHabits={setHabits} weekdays={daysOfWeek} /> : null}

            {habits.habitsList.map((habit, index) =>

                <UserHabits
                    key={index}
                    id={habit.id}
                    name={habit.name}
                    days={habit.days}
                    weekdays={daysOfWeek}
                    habits={habits.habitsList}
                    setHabits={setHabits}
                />)}

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
                console.log('habit registered successfully')
                console.log(res)
                setHabits({ ...habits, habitsList: [...habits.habitsList, { name: selected.name, days: selected.list, id: res.data.id }] })

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

            console.log(res)
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

    // separe o selected em dias unicos
    const uniqueDays = [...new Set(selected)]

    // separe o uniqueDays em elementos unicos
    const uniqueDaysArray = [...new Set(uniqueDays)]

    // compare uniqueDaysArray com week
    const isSelected = uniqueDaysArray.includes(week)

    // coloque apenas a primeira letra da string no botao
    const firstLetter = week.slice(0, 1)

    const color = isSelected ? '#CFCFCF' : '#FFFFFF'

    return <button style={{ background: color }}>{firstLetter}</button>
}