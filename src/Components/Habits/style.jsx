import styled from 'styled-components'

const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    background: #E5E5E5;

    .plus {

        width: 40px;
        height: 40px;
        background: #52B6FF;    
        border-radius: 5px;
        margin-right: 10%;
    }

    .new-habit {

        width: 90%;
        height: 25%;

        display: flex;
        flex-direction: column;
        background: #FFFFFF;
        border-radius: 20px;

        .habit-name {
    
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            
            input {
    
                width: 90%;
                height: 100%;
                background: #FFFFFF;
                border: 1px solid #D5D5D5;
                box-sizing: border-box;
                border-radius: 5px;

                font-family: 'Lexend Deca';
                font-weight: 400;
                font-size: 20px;
                line-height: 25px;
                color: gray;
            }
        }

        .habit-day {
    
            width: 90%;
            height: 60%;
            margin-bottom: 10px;
    
            button {
    
                width: calc(100% / 7); 
                height: 70%;
                background: #FFFFFF;
                border: 1px solid #D5D5D5;
                box-sizing: border-box;
                border-radius: 8px;
                font-size: 20px;
                font-weight: bold;
                color: #DBDBDB;
                cursor: pointer;
            }
        }

        .confirm {

            width: 100%;
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            // background: red;

            button {
                
                margin-left: 5%;
                margin-bottom: 10px;
                width: 50%;
                height: 100%;
                border-radius: 10px;   
                background: #FFFFFF;
                color: #52B6FF;
                cursor: pointer;
            }

            button:first-child {
                
                color: #ffffff;
                background: #52B6FF;
            }
        }
    }

    h2 {

        margin-top: 5%;
        margin-left: 5%;
        margin-right: 5%;
    
        font-family: 'Lexend Deca';
        font-weight: 400;
        // text-align: center;
        font-size: 18px;
        color: #666666;
    }

    div {

        margin-top: 20px;
        width: 100%;

        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {

            margin-left: 5%;
            font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 35px;
            color: #126BA5;
        }

        button {

            margin-right: 5%;
            width: 50px;
            height: 50px;
            background: #52B6FF;
            border-radius: 5px;
            color: #ffffff;
            cursor: pointer;
        }        
    }



    @media (min-width: 600px) {
        .new-habit {
            width: 60%;
        }
    }

`


export default Container