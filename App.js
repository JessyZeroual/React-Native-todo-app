import { StatusBar } from "expo-status-bar";
import React from "react";

import { TodosContextProvider } from "./context/TodosContext";
import useTodos from "./helpers/useTodos";
import NavigationBar from "./components/NavigationBar/NavigationBar";

const App = () => {
  const {
    isLoading,
    todos,
    fetchTodos,
    _deleteTodo,
    _updateTodo,
    _postTodo,
    addImage,
  } = useTodos();

  return (
    <>
      <TodosContextProvider
        value={{
          state: { isLoading, todos },
          dispatch: {
            fetchTodos,
            _deleteTodo,
            _updateTodo,
            _postTodo,
            addImage,
          },
        }}
      >
        <NavigationBar />
      </TodosContextProvider>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
