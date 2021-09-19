import { useState, useReducer } from "react";
import "./styles.css";

const defaultProps = {
  increment: 2,
  underline: true,
  color: 'black'
}

const MyButton = (props) => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useReducer((total, incrementBy) => {
    return total + incrementBy;
  }, 0);

  return (
    <div
      style={{
        color: props.color,
        textDecoration: props.underline ? 'underline' : undefined
      }}
      onClick={() => {
        setCountA(c => c + props.increment);
        setCountB(1);
      }}>
      useReducer={countB} useState={countA}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <MyButton {...defaultProps} color='blue' />
      <MyButton {...defaultProps} underline={false} color='red' />
      <MyButton {...defaultProps} color='orange' />
    </div>
  );
}
