import { StatusBar } from "expo-status-bar";
import React from "react";
import { ActivityIndicator } from "react-native";
import { Container } from "./App.styled";

import useTodos from "./helpers/useTodos";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const { isLoading, todos, fetchTodos } = useTodos();

  return (
    <Container>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <TodoList todos={todos} fetchTodos={fetchTodos} />
      )}
      <StatusBar style="auto" />
    </Container>
  );
};

export default App;
