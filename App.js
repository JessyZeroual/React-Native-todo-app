import { StatusBar } from "expo-status-bar";
import React from "react";

import { TodosContextProvider } from "./context/TodosContext";
import useTodos from "./helpers/useTodos";

import { Container } from "./components/Home/Home.styled";
import NavigationBar from "./components/NavigationBar/NavigationBar";

const App = () => {
  const {
    isLoading,
    todos,
    fetchTodos,
    _deleteTodo,
    _updateTodo,
    _postTodo,
  } = useTodos();

  return (
    <Container>
      <TodosContextProvider
        value={{
          state: { isLoading, todos },
          dispatch: { fetchTodos, _deleteTodo, _updateTodo, _postTodo },
        }}
      >
        <NavigationBar />
      </TodosContextProvider>
      <StatusBar style="auto" />
    </Container>
  );
};

export default App;
