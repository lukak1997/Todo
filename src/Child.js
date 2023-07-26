function Child({ todos, setTodos }) {
  function Delete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function Done(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="todos">
      {todos.map((todo) => (
        <div className="todo-items" key={todo.id}>
          <div className={`todos-text  {todo.done ? "done" : ""`}>
            {todo.value}
          </div>
          <div className="buttons-div">
            <button
              className={`done-button ${todo.done ? "done" : ""}`}
              onClick={() => {
                Done(todo.id);
              }}
            >
              {todo.done ? <ion-icon name="checkmark-outline"></ion-icon> : ""}
            </button>
            <div className="delete-button">
              <ion-icon
                name="trash-outline"
                onClick={() => {
                  Delete(todo.id);
                }}
              ></ion-icon>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Child;
