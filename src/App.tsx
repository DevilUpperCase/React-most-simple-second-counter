import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ClassTimer } from "./components/ClassTimer";

function App() {

  const [second, setSecond] = useState(0);
  
  useEffect(() => {
    let interval = setInterval(() => setSecond(second + 1), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [second]);
  
  return (
    <div className="App">
      <ClassTimer init_second={0}></ClassTimer>
    </div>
  );
}

export default App;
