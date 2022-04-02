import styled from "styled-components";

const HabitsContainer = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E5E5E5;

    .nohabit {

        width: 85%;
        margin-top: 50px;
        txet-align: center;

        h1 {

            font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            color: #666666;
        }
    }

    .loader {

        margin-top: 50%;
    }

    @media (min-width: 768px) {

        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        margin-left: 25%;
    }

    .user-habits {

        width: 90%;
        height: 12%;
        margin-top: 5%;
        background: #FFFFFF;
        border-radius: 5px;      

        .habit-name {

            width: 100%;
            height: 50%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            h1 {

                margin-left: 5%;
                font-family: 'Lexend Deca';
                font-weight: 400;
                font-size: 20px;
                line-height: 25px;
                color: #666666;
            }

            button {
                margin-right: 5%;
                cursor: pointer;
            }
        }

        .selected-days {

            width: 100%;
            height: 50%;

            button {

                width: calc(100% / 10);
                height: 70%;
                background: #FFFFFF;
                border: 1px solid #D5D5D5;
                border-radius: 10px;
                margin-left: 3%;

                font-family: 'Lexend Deca';
                font-weight: 400;
                font-size: 20px;
                line-height: 25px;
                color: #DBDBDB;
            }
        }
    }
    


    .my-habits {

        width: 80%;
        height: 8%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {

            font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 22px;
            line-height: 29px;
            color: #126BA5;
        }

        button {

            width: 40px;
            height: 35px;
            background: #52B6FF;
            border-radius: 5px;
            cursor: pointer;
        }
    }

    .create-new-habit {

        width: 90%;
        height: 20%;
        background: #FFFFFF;
        border-radius: 5px;       
        
        .input-text {

            width: 100%;
            height: 35%;
            display: flex;
            justify-content: center;
            align-items: center;

            input {

                width: 90%;
                height: 80%;
                background: #FFFFFF;
                border: 1px solid #D5D5D5;
                box-sizing: border-box;
                border-radius: 5px;
            }
        }

        .days-of-week {
            
            width: 100%;
            height: 35%;
            padding-left: 5%;

            button {

                width: calc(100% / 9);
                height: 70%;
                background: #FFFFFF;
                border: 1px solid #D5D5D5;
                border-radius: 10px;
                margin-right: 5px;
                cursor: pointer;

                font-family: 'Lexend Deca';
                font-weight: 400;
                font-size: 20px;
                line-height: 25px;
                color: #DBDBDB;
            }
        }

        .cancel-save {

            width: 95%;
            height: 30%;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            button:first-child {

                width: 30%;
                height: 85%;
                margin-right: 5%;
                background: #ffffff;
                border-radius: 8px;
                cursor: pointer;
            }

            button:last-child {

                width: 30%;
                height: 85%;

                background: #52B6FF;
                border-radius: 8px;
                cursor: pointer;
            }
        }
        

`;

export default HabitsContainer;
