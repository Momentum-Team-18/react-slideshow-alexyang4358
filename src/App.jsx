import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import filmData from './film-data.json'
import './App.css'
import Slideshow from './Slideshow.jsx'

function App() {


  return (
    <>
      <div>
        {filmData.map((slide) => (
          <Slideshow slide={slide} key={slide.id}/>
        ))}
      </div>
      <h1>hi</h1>
    </>
  )
}

export default App

// const [count, setCount] = useState(0)
{/* <button onClick={() => setCount((count) => count + 1)}>count is {count}</button> */}
