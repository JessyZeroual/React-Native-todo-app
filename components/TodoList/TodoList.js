import React, { useContext } from "react";
import { FlatList } from "react-native";
import TodosContext from "../../context/TodosContext";
import TodoItem from "../TodoItem/TodoItem";
import { TodoListWrapper } from "./TodoList.styled";

const TodoList = () => {
  const todosContext = useContext(TodosContext);
  const { todos } = todosContext.state;
  const { fetchTodos } = todosContext.dispatch;

  return (
    <TodoListWrapper>
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={() => fetchTodos({ needMoreTodos: true })}
      />
    </TodoListWrapper>
  );
};

export default TodoList;
