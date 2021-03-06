import React from "react";
import "./styles.css";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FormTodo from "./components/TodoForm";
import Todo from "./components/Todo";


function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "I'm a todo",
      isDone: false
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4" style={{ color: "deepskyblue" }}>
          Reminder
        </h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card className="card" style={{marginTop:"10px", marginBottom:"10px"}}>
              <Card.Body style={{ backgroundColor: "black"}}>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
                <span> </span>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
