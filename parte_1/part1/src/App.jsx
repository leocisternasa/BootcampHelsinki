import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleOnGood = () => {
    console.log(good)
    setGood(good + 1)
  }
  const handleOnNeutral = () => {
    console.log(neutral)
    setNeutral(neutral + 1)
  }
  const handleOnBad = () => {
    console.log(bad)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedbacks</h1>
      <button onClick={handleOnGood}>good</button>
      <button onClick={handleOnNeutral}>neutral</button>
      <button onClick={handleOnBad}>bad</button>

      <h1>Statictics</h1>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App
