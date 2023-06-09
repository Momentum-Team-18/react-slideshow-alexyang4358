import React from 'react'
import filmData from './film-data.json'
import {useState} from 'react'

function Slideshow(props) {
    const [currentSlide, setCurrentSlide] = useState(0)
    console.log(currentSlide.id)

    const handleStartOver = () => {
        setCurrentSlide(0)
    }

    const handleNextSlide = () => {
        setCurrentSlide(currentSlide + 1)
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
                <button onClick = {handleStartOver} className='button'>START OVER</button>
                <button className='button'>BACK</button>
                <button onClick = {handleNextSlide}className='button'>NEXT</button>
            </div>
        </section>
        </>
    )
    }
export default Slideshow;

// currentSlide = [0]