import styled from "styled-components";

const Footer = styled.div`

    width: 100%;
    height: 50px;
    position: fixed;
    z-index: 2;
    bottom: 0;
    background: #FFFFFF;

    display: flex;

    .habits {

        width: 30%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        h1 {

            font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            color: #52B6FF;
            cursor: pointer;
        }
    }

    .today {

        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {

            width: 60%;
            margin-bottom: 40%;
        }

        h4 {
            position: fixed;
            margin-top: -17%;
            font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            color: #FFFFFF;
            cursor: pointer;
        }
    }

    .historic {

        width: 30%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        h1 {

            font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            color: #52B6FF;
            cursor: pointer;
        }
    }

    @media (min-width: 600px) {

        width: 60%;

        .today {
    
            img {
    
                width: 15%;
                margin-bottom: 12%;
            }

            h1 {

                margin-top: -3%;
            }
        }
    }


`


export default Footer