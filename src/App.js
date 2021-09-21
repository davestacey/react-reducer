import React, { useState, useReducer, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./styles.css";

const defaultProps = {
  increment: 2,
  underline: true,
  color: 'black'
}

const MyButton = (props) => {
  const [count, setCount] = useReducer((total, incrementBy) => {
    return total + incrementBy;
  }, 0);

  return (
    <button
      style={{
        color: props.color,
        textDecoration: props.underline ? 'underline' : undefined
      }}
      onClick={() => {
        setCount(1);
      }}>
      Count={count}
    </button>
  );
}

const MyForm = () => {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: uuidv4(),
            name: action.name
          }
        ];
      case "remove":
        // keep every item except the one we want to remove
        return state.filter((_, index) => index != action.index);
      case "clear":
        return [];
      default:
        return state;
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value
    });
    inputRef.current.value = "";
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <button onClick={() => dispatch({ type: "clear" })}>Clear</button>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => dispatch({ type: "remove", index })}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
    );
}

export default function App() {
  return (
    <div className="App">
      <MyButton {...defaultProps} color='blue' />
      <MyButton {...defaultProps} underline={false} color='red' />
      <MyButton {...defaultProps} color='orange' />
      <MyForm></MyForm>
    </div>
  );
}
