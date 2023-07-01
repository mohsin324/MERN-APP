import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import GlobalContext from './Component/GlobalContext/WorkoutContext';
import AuthContextProvider from './Component/GlobalContext/AuthContext';


// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
        <GlobalContext>
            <App />
        </GlobalContext>
    </AuthContextProvider>
)
