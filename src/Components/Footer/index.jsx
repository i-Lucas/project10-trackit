import Footer from './style'
import circle from '../../assets/img/circle.svg'
import { useNavigate } from 'react-router-dom'

export default function FooterApp() {
    const navigate = useNavigate();

    return (
        <Footer>
            <div className="habits">
                <h1 onClick={() => navigate('/habits')}>habits</h1>
            </div>
            <div className="today">
                <img src={circle} alt="circle" />
                <h4 onClick={() => navigate('/today')}>today</h4>
            </div>
            <div className="historic">
                <h1 onClick={() => navigate('/historic')}>historic</h1>
            </div>
        </Footer>
    )
}