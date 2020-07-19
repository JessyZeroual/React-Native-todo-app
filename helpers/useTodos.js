import { useState, useEffect } from "react";
import { getTodos } from "../api/todos";

const useTodos = () => {
  const LIMIT = 7;
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [start, setStart] = useState(0);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async (needMoreTodos) => {
    const currentStart = needMoreTodos ? start + LIMIT : 0;

    if (needMoreTodos) {
      await getTodos(currentStart, LIMIT).then((data) => {
        const newTodoList = todos.concat(data);
        setTodos(newTodoList);
      });
      return setStart(currentStart);
    }

    await getTodos(currentStart, LIMIT).then((data) => {
      setTodos(data);
    });
    setIsLoading(false);
  };

  return { isLoading, todos, fetchTodos };
};

export default useTodos;
