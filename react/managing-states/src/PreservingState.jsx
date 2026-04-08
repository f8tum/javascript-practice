// state is isolated for each component
// when we uncheck the second counter, React unmounts it
// when we check it again, React mounts a new Counter component
// so its state is reset
// key helps React identify components, but it does NOT preserve state after unmount

import { useState } from "react";

export default function App() {
  const [showB, setShowB] = useState(true);

  return (
    <div className="border p-4 flex gap-4 flex-col">
      <Counter />
      {showB && <Counter />}
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={e => {
            setShowB(e.target.checked)
          }}
        />
        Render the second counter
      </label>
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'p-2 border counter max-w-fit';
  if (hover)
    className += 'hover max-w-fit bg-yellow-50';

  return (
    <div
      className = {className}
      onPointerEnter={() => {setHover(true)}}
      onPointerLeave={() => {setHover(false)}}
    >
      <h1>{score}</h1>
      <button onClick={() => {setScore(score + 1)}}>
        Add one +
      </button>
    </div>
  );
}