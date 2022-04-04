import styled from 'styled-components';

const Container = styled.div`
            
    width: 100%;    
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        width: 50%;
        margin-left: 25%;
    }

    img {
        margin-bottom: 5%;
    }

    input {

        width: 80%;
        height: 45px;
        margin-top: 1%;
        margin-bottom: 1%;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;

        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;    
        color: #000000;
    }

    button {
        
        width: 80%;
        height: 50px;

        margin-top: 1%;
        margin-bottom: 1%;

        display: flex;
        justify-content: center;
        align-items: center;

        background: #52B6FF;
        border-radius: 10px;
        font-size: 22px;
        color: white;
        cursor: pointer;
    }  

    a {

        margin-top: 5%;
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

    h2 {

        margin-top: 10%;
        font-family: 'Lexend Deca';
        font-size: 22px;
        color: green;
    }

    h3 {

        margin-top: 20px;
        margin-left: 2%;
        margin-right: 2%;
        text-align: center;
        font-family: 'Lexend Deca';
        font-size: 15px;
        color: blue;
    }

    h4 {

        margin-top: 10%;
        font-family: 'Lexend Deca';
        font-size: 12px;
        font-weight: bold;
        color: orange;
    }

    .check {

        width: 20px;
    }
    `
    export default Container