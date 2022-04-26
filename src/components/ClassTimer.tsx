import React, {useState, useEffect} from "react";

export const ClassTimer = (props: any): JSX.Element => {

  const [second, setSecond] = useState(props.init_second);
  
  useEffect(() => {
    let interval = setInterval(() => setSecond(second + 1), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [second]);
  
  return (
    <div>
      <p> Seconds: {second}</p>
    </div>
  );
}
