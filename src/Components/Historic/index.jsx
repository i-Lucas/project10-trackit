import Footer from '../Footer/'
import HistoricContainer from './style'

export default function Historic({ token }) {

    return (
        <HistoricContainer>
            <div className="title"><h2>Historic</h2></div>
            <div className="contents">
                <h5>Soon you will be able to see the history of your habits here!</h5>
            </div>
            <Footer />
        </HistoricContainer>
    )
}