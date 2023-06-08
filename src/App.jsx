import './App.css'
import { useState } from 'react'


function App( {filmData, Slideshow} ) {
  return (
    <>
      <div>
        {filmData.map((slide) => (
          <Slideshow slide={slide} key={slide.id}/>
        ))}
      </div>
    </>
  )
}

export default App

// const [count, setCount] = useState(0)
{/* <button onClick={() => setCount((count) => count + 1)}>count is {count}</button> */}

