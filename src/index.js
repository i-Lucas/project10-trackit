import reactDom from 'react-dom'
import Routes from './Components/Routes'

import './assets/reset.css'
import './assets/global.css'

function App() {
    return (
        <Routes />
    )
}

reactDom.render(<App />, document.querySelector('.root'))