import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { Container } from "./App.styled";

import useTodos from "./helpers/useTodos";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const { isLoading, todos } = useTodos();
  return (
    <Container>
      {isLoading ? <Text>loading...</Text> : <TodoList todos={todos} />}
      <StatusBar style="auto" />
    </Container>
  );
};

export default App;
