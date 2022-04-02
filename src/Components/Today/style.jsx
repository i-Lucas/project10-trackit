import styled from 'styled-components'


const TodayContainer = styled.div`

    width: 100%;
    height: 90vh;
    background-color: #E5E5E5;

    display: flex;
    flex-direction: column;
    align-items: center;

    .loader {

        margin-top: 50%;
    }

    .habit-box {

        position: relative;
        margin-top: 2%;
        width: 90%;
        height: 12%;
        background: #FFFFFF;
        border-radius: 5px;

        .name { 

            h1 {

                font-family: 'Lexend Deca';
                font-weight: 400;
                font-size: 22px;
                line-height: 25px;
                color: #666666;
                margin-bottom: 10px;
                margin-left: 10px;
                margin-top: 10px;
            }
        }

        .description {

            p {
                
                font-family: 'Lexend Deca';
                font-weight: 400;
                font-size: 15px;
                line-height: 16px;
                color: #666666;
                margin-left: 10px;
                margin-top: 3px;
            }
        }

        .check-box {

            position: absolute;
            top: 10px;
            right: 10px;

            width: 70px;
            height: 70px;

            display: flex;
            align-items: center;
            justify-content: center;

            background: #EBEBEB;
            border: 1px solid #E7E7E7;
            box-sizing: border-box;
            border-radius: 5px;
            cursor: pointer;
        }


    }

    .title {
        
        width: 100%;
        height: 10%;
        margin-bottom: 50px;

        h1 {

            font-family: 'Lexend Deca';
            margin-left: 6%;
            padding-top: 10%;
            font-weight: 400;
            font-size: 23px;
            line-height: 29px;
            color: #126BA5;
        }

        h2 {

            font-family: 'Lexend Deca';
            margin-top: 5px;
            margin-left: 6%;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            color: #BABABA;
        }
    }

    @media (min-width: 768px) {

        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        margin-left: 25%;

        .title {
            h1 {
                padding-top: 5%;
            }
        }

        .habit-box {

            .check-box {
                
                position: absolute;
                top: 15px;
                right: 20px;

                width: 80px;
                height: 80px;
            }
        }
    }


`


export default TodayContainer