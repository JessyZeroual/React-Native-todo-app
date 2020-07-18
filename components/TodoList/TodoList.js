import React from "react";
import { FlatList, Text } from "react-native";
import { TodoListWrapper } from "./TodoList.styled";

const TodoList = ({ todos, fetchTodos }) => {
  const renderItem = ({ item }) => (
    <Text style={{ height: 100 }}>{item.title}</Text>
  );

  return (
    <TodoListWrapper>
      <FlatList
        id="todoList"
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={() => fetchTodos({ needMoreTodos: true })}
      />
    </TodoListWrapper>
  );
};

export default TodoList;
