import React from 'react'; //importing whole react module--don't need in new react but just bc
import ReactDOM from 'react-dom';//importing react DOM module. Virtual DOM renders actual react components
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';//vitals?


ReactDOM.render(<App />, document.getElementById('root'));//this is what actually renders. 2 parameters first is what you want to render second where (create react app will do it for you for the most part)
registerServiceWorker(); 
