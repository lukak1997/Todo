import "./App.css";
import { useState, useEffect } from "react";
import Child from "./Child";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleAddTodo = () => {
    const todo = {
      id: Math.floor(Math.random() * 1000),
      value: inputValue,
    };
    if (inputValue) {
      setTodos([...todos, todo]);
      setInputValue("");
    }
  };

  return (
    <div className="container">
      <p className="todo-icon">Todo</p>

      <div className="main-card">
        <div className="card-header">
          <p className="clock">{currentTime.toLocaleTimeString()}</p>
        </div>
        <div className="wrapper-div">
          <div className="input-div">
            <input
              className="input"
              maxLength={23}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            ></input>
            <button
              className="button-plus"
              onClick={() => {
                handleAddTodo();
              }}
            >
              +
            </button>
          </div>

          <Child todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
