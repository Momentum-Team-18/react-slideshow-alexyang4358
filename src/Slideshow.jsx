import { useState } from 'react'
import React from 'react'

function Slideshow(props) {
    return (
        <>
        <section className='slide'> 
            <img className='image' src={props.slide.image}></img>
            <div className='content'>
                <h1 className='title'>{props.slide.title}</h1>
                <p className='title'>{props.slide.original_title}</p>
                <p className='paragraph'>{props.slide.release_date}</p>
                <p className='paragraph'>{props.slide.description}</p>
                <button className='button'>START OVER</button>
                <button className='button'>BACK</button>
                <button className='button'>NEXT</button>
            </div>
        </section>
        </>
    )
    }
export default Slideshow;