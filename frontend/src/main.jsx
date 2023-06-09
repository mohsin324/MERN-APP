import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import GlobalContext from './Component/GlobalContext/WorkoutContext';
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalContext>
        <App />
        
    </GlobalContext>
)
