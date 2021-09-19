import { useState } from "react";
import "./styles.css";

const MyButton = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        color: props.color,
        textDecoration: props.underline ? 'underline' : undefined
      }}
      onClick={() => setCount(c => c + props.increment)}>
      I am button {count}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <MyButton increment={2} underline={true} color='blue' />
      <MyButton increment={2} underline={true} color='red' />
      <MyButton increment={2} underline={true} color='orange' />
    </div>
  );
}
