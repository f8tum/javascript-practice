// state updates are queued, not changed immediately
// React uses the current render's snapshot of state inside this function
// so multiple setNumber(number + 1) calls use the same old value
// use updater form when next state depends on previous state

import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <div className="mt-15">
      <h1>{number}</h1>
      <button className="border-1 p-2"
        onClick = {() => {
          // stores it in queue and adds it during the queue
          // after the queue is processed
          // the component is rendered
          setNumber(n => n + 1);
          setNumber(n => n + 1);
          setNumber(n => n + 1);
        }
      }>
        
      +3
      </button>
    </div>
  );
}