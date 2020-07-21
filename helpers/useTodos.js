import { useState, useEffect } from "react";
import { LayoutAnimation } from "react-native";
import { getTodos, deleteTodo, updateTodo, postTodo } from "../api/todos";

const useTodos = () => {
  const LIMIT = 8;
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

  const _deleteTodo = async (id) => {
    const response = await deleteTodo(id);
    if (response.status === 200) {
      setTodos(todos.filter((todo) => todo.id !== id));
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    }
  };

  const _updateTodo = async (id, userId, title, completed) => {
    const response = await updateTodo(id, completed, userId, title);
    const data = await response.json();

    if (response.ok) {
      const newTodos = todos.map((todo) => {
        if (todo.id === data.id) todo.completed = data.completed;
        return todo;
      });
      setTodos(newTodos);
    }
  };

  const _postTodo = async (title) => {
    if (title.trim().length < 1) return;
    const response = await postTodo(title);
    const data = await response.json();
    setTodos([...todos, data]);
  };

  const addImage = (todoId, uri) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.imageUri = uri;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return {
    isLoading,
    todos,
    fetchTodos,
    _deleteTodo,
    _updateTodo,
    _postTodo,
    addImage,
  };
};

export default useTodos;
