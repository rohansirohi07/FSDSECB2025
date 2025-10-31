import { useState} from 'react';
import React from 'react';

function StateHandling() {
  const [counter, setCounter] = useState(20);
  function incrementCounter() {
    setCounter(counter + 2);
  }
    return (
    <div>
      <h2>Counter value={counter}</h2>
      <button onClick={incrementCounter}>increment counter</button>
      <button onClick={()=>setCounter(counter-2)}>Decrease counter</button>
      </div>
    )
}
export default StateHandling