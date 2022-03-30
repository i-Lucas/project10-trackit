import reactDom from 'react-dom'
import Routes from './Components/Routes'

import './assets/stylesheets/reset.css'
import './assets/stylesheets/global.css'

function App() {
    return (
        <Routes />
    )
}

reactDom.render(<App />, document.querySelector('.root'))