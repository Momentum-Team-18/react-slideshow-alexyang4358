import './App.css'
import filmData from './film-data.json'
import Slideshow from './Slideshow.jsx'

function App() {
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
// {filmData.pop((slide) => ()
