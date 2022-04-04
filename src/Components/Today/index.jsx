import { ThreeDots } from 'react-loader-spinner'
import { useEffect, useState } from 'react'
import Footer from '../Footer/'
import axios from 'axios'

import TodayContainer from './style'
import checkbox from '../../assets/img/check.svg'

export default function Today({ token }) {

    const [habits, setHabits] = useState({
        list: [],
        loading: true
    })

    useEffect(() => {

        const header = { headers: { "Authorization": `Bearer ${window.localStorage.getItem('#$321')}` } }
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'

        axios.get(url, header).then(res => {

            console.log('habits recovered successfully')
            console.log(res.data)

            setHabits({
                list: res.data,
                loading: false
            })

        }).catch(err => {
            console.log('error retrieving habits')
            console.log(err.response)
        })

    }, [token])

    const getDate = () => {

        const date = new Date()
        const day = date.getDay()
        const dayNumber = date.getDate()
        const month = date.getMonth() + 1

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const dayName = days[day]

        const dayFormatted = dayNumber < 10 ? `0${dayNumber}` : dayNumber
        const monthFormatted = month < 10 ? `0${month}` : month

        return `${dayName} ${dayFormatted}/${monthFormatted}`
    }

    return (
        <TodayContainer>

            {habits.loading ?
                <div className="loader"><ThreeDots color='#00BFFF' height={90} width={90} /></div> :
                <div className="title"><h1>{getDate()}</h1><h2>No habits completed yet</h2> </div>}

            {habits.list.map(habit =>
                <GenerateHabits name={habit.name}
                    id={habit.id} key={habit.id}
                    done={habit.done} currentSequence={habit.currentSequence}
                    highestSequence={habit.highestSequence} />
            )}

            <Footer />
        </TodayContainer>
    )
}

function GenerateHabits({ name, id, done, currentSequence, highestSequence }) {

    const [checked, setChecked] = useState(done)
    const [loading, setLoad] = useState(false)
    const color = checked ? '#8FC549' : '#EBEBEB'
    const header = { headers: { "Authorization": `Bearer ${window.localStorage.getItem('#$321')}` } }

    function check(id) {

        setLoad(true)

        if (checked) {

            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
            axios.post(url, {}, header).then(res => {

                setLoad(false)
                setChecked(!checked)
            })
        }
        else {

            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
            axios.post(url, {}, header).then(res => {
                
                setLoad(false)
                setChecked(!checked)
            })
        }
    }

    return (
        <div className="habit-box">
            <div className="name"><h1>{name}</h1></div>
            <div className="description">
                <p>current sequence: {currentSequence}</p>
                <p>your record: {highestSequence}</p>
            </div>
            <div className="check-box" style={{ background: color }} onClick={() => check(id)}>
                {loading ? <ThreeDots color='#00BFFF' height={50} width={50} /> : <img src={checkbox} alt="check" />}
            </div>
        </div>
    )
}