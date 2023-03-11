import React, {useState} from "react";
import './App.css'

function App () {
  const [count, setCount] = useState(0)
  function inc() {
    setCount(count + 1)
  }

  function dec() {
      setCount(count - 1)
  }

  function restart() {
      setCount(0)
  }

  function random() {
      let ran = Math.trunc(Math.random() * 100);
      setCount(ran)
  }
  return (
      <div>
        <h1>{count}</h1>
        <button onClick={inc}>Click to increase</button>
        <button onClick={dec}>Click to decrease</button>
        <button onClick={random}>Random</button>
        <button onClick={restart}>Restart</button>
      </div>
  )
}

export default App