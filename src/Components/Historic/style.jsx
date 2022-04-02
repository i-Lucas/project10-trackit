import styled from 'styled-components'

const HistoricContainer = styled.div`

    width: 100%;
    height: 90vh;
    background-color: #E5E5E5;

    .title {

        width: 100%;
        height: 20%;

        h2 {
        
            margin-left: 10%;
            padding-top: 10%;
            font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 23px;
            line-height: 29px;
            color: #126BA5;
        }
    }

    .contents {

        width: 100%;
        height: 20%;

        h5 {
            
            margin-left: 10%;
            margin-top: 10%;
            font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            color: #666666;
        }
    }

    @media (min-width: 768px) {

        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        margin-left: 25%;
    }

`

export default HistoricContainer