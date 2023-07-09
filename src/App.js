import { useState, useEffect, useRef } from "react";


function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const focus=useRef(null)

  useEffect(() => {
    count.current = count.current + 1;
    focus.current.focus();
  });

  return (
    <>
      <input
      ref={focus}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}


export default App
