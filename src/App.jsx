import { useEffect, useState } from "react";
import "./App.css";
import ReadTime from "./components/ReadTime";

function App() {
  const [advice, setAdvice] = useState(0);
  const [count, setCount] = useState(0);

  function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setCount(count + 1);
      });
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <ReadTime count={count} />
    </>
  );
}
export default App;
