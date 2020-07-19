import { useState, useEffect } from "react";

import { LayoutAnimation } from "react-native";
import { getTodos, deleteTodo } from "../api/todos";

const useTodos = () => {
  const LIMIT = 8;
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [start, setStart] = useState(0);

  useEffect(() => {
    fetchTodos();
  }, []);

  const _deleteTodo = async (id) => {
    const response = await deleteTodo(id);
    if (response.ok) {
      setTodos(todos.filter((todo) => todo.id !== id));
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    }
  };

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

  return { isLoading, todos, fetchTodos, _deleteTodo };
};

export default useTodos;
