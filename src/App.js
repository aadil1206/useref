import { useState, useEffect, useRef } from "react";


function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const focus=useRef(null)
  const focus12=useRef(null)

  useEffect(() => {
    count.current = count.current + 1;
    focus.current.focus();
  });
 const handlefocus=()=>{
  focus12.current.style.backgroundColor="red"
 }
  return (
    <>
      <input
      ref={focus}
      // onFocus={handlefocus}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1 >Render Count: {count.current}</h1>
       <input
      ref={focus12}
      onFocus={handlefocus}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
}


export default App
