import React from "react";
import { FlatList, Text } from "react-native";
import { TodoListWrapper } from "./TodoList.styled";

const TodoList = ({ todos }) => {
  const renderItem = ({ item }) => <Text>{item.title}</Text>;
  return (
    <TodoListWrapper>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </TodoListWrapper>
  );
};

export default TodoList;
