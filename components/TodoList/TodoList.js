import React from "react";
import { FlatList } from "react-native";
import TodoItem from "../TodoItem/TodoItem";
import { TodoListWrapper } from "./TodoList.styled";

const TodoList = ({ todos, fetchTodos, _deleteTodo, _updateTodo }) => {
  return (
    <TodoListWrapper>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            item={item}
            _deleteTodo={_deleteTodo}
            _updateTodo={_updateTodo}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={() => fetchTodos({ needMoreTodos: true })}
      />
    </TodoListWrapper>
  );
};

export default TodoList;
