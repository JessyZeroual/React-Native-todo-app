import { useState, useEffect } from "react";
import { getTodos } from "../api/todos";

const useTodos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((data) => {
      setTodos(data);
    });
    setIsLoading(false);
  }, []);

  return { isLoading, todos };
};

export default useTodos;
