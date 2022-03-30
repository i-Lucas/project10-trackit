import styled from 'styled-components';

const Container = styled.div`
            
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    input {

        width: 80%;
        height: 45px;
        margin-top: 1%;
        margin-bottom: 1%;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
    }

    button {
        
        width: 80%;
        height: 45px;

        margin-top: 1%;
        margin-bottom: 1%;

        background: #52B6FF;
        border-radius: 10px;
        color: white;
    }  

    a {

        margin-top: 2%;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 16px;
        text-decoration-line: underline;

        color: #52B6FF;
    }

    form {

        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {

        margin-top: 2%;
        margin-bottom: 2%;
        color: red;
        font-family: 'Lexend Deca';
        font-size: 16px;
    }
    `

    export default Container