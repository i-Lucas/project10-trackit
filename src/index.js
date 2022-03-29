import reactDom from 'react-dom'

function App () {
    return <h1>Hello World</h1>
}

reactDom.render(<App />, document.querySelector('.root'))