import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClick = (e) => {
    if (!input.trim()) return;
    e.preventDefault();
    const item = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    //console.log(item.id);

    setTodos((prev) => [...prev, item]);
    //console.log(todos);
    setInput("");
  };
  const toggleStrike = (id) => {
    setTodos(
      todos.map((x) => (x.id === id ? { ...x, completed: !x.completed } : x))
    );
  };
  const handledelete = (idToDelete) => {
    const filteredArr = todos.filter((val) => val.id !== idToDelete);
    setTodos(filteredArr);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Todoss..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleClick}>Add</button>
      </div>
      <div>
        <ul>
          {todos.map((x) => (
            <li key={x.id}>
              <input
                type="checkbox"
                checked={x.completed}
                onChange={() => toggleStrike(x.id)}
              />
              <span className={x.completed ? "strikethrough" : ""}>
                {x.text}
              </span>

              <button onClick={() => handledelete(x.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
