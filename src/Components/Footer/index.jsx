import styled from 'styled-components'
import trackit from '../../assets/img/trackit.svg'

export default function Footer({ userimg }) {
    return (
        <Container>
            <img className='logo' src={trackit} alt="logo" />
            <img src={userimg} alt='user' />
        </Container>
    )
}

const Container = styled.div`

    postion: relative;
    top: 0px;
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 60px;
        height: 60px;
        background: url(userimg);
        border-radius: 100px;
        margin-left: 20px;
        margin-right: 20px;
    }

    .logo {
        width: 100px;
    }

`