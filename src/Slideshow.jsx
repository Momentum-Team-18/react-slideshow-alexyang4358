import React from 'react'
import filmData from './film-data.json'
import {useState} from 'react'


function Slideshow() {

    const [currentSlide, setCurrentSlide] = useState(0)
    console.log(filmData.length)

    const handleStartOver = () => {
        setCurrentSlide(0)
    }

    const handleNextSlide = () => {
        setCurrentSlide(currentSlide + 1)
    }

    const handlePreviousSlide = () => {
        setCurrentSlide(currentSlide - 1)
    }

    return (
        <>
        <section className='slide'>
            <img className='image' src={filmData[currentSlide].image}></img>
            <div className='content'>
                <h1 className='title'>{filmData[currentSlide].title}</h1>
                <p className='title'>{filmData[currentSlide].original_title}</p>
                <p className='paragraph'>{filmData[currentSlide].release_date}</p>
                <p className='paragraph'>{filmData[currentSlide].description}</p>
            <div className='content'>
                <button onClick = {handleStartOver} disabled={currentSlide === 0} className='button'>START OVER</button>
                <button onClick = {handlePreviousSlide} disabled={currentSlide === 0} className='button'>BACK</button>
                <button onClick = {handleNextSlide} disabled={currentSlide === filmData.length - 1} className='button'>NEXT</button>
                </div>
            </div>
        </section>
        </>
    )
    }
export default Slideshow;

// currentSlide = [0]