import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Slideshow from './Slideshow.jsx'
import './index.css'
import filmData from './film-data.json'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App filmData={filmData} Slideshow={Slideshow}/>
)
