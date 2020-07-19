import { StatusBar } from "expo-status-bar";
import React from "react";
import { ActivityIndicator } from "react-native";
import { TodosContextProvider } from "./context/TodosContext";
import { Container } from "./App.styled";
import { ViewCenter } from "./style/common.styled";

import useTodos from "./helpers/useTodos";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const { isLoading, todos, fetchTodos, _deleteTodo, _updateTodo } = useTodos();

  return (
    <Container>
      {isLoading ? (
        <ViewCenter>
          <ActivityIndicator size="large" />
        </ViewCenter>
      ) : (
        <TodosContextProvider
          value={{
            state: { isLoading, todos },
            dispatch: { fetchTodos, _deleteTodo, _updateTodo },
          }}
        >
          <TodoList />
        </TodosContextProvider>
      )}
      <StatusBar style="auto" />
    </Container>
  );
};

export default App;
