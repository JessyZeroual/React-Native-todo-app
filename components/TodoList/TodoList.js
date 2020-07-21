import React, { useContext } from "react";
import { FlatList } from "react-native";
import TodosContext from "../../context/TodosContext";
import TodoItem from "../TodoItem/TodoItem";
import { StyledTodoListWrapper } from "./TodoList.styled";

const TodoList = () => {
  const todosContext = useContext(TodosContext);
  const { todos } = todosContext.state;
  const { fetchTodos } = todosContext.dispatch;

  return (
    <StyledTodoListWrapper>
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={() => fetchTodos({ needMoreTodos: true })}
      />
    </StyledTodoListWrapper>
  );
};

export default TodoList;
