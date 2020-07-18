import React from "react";
import { Text } from "react-native";
import truncateString from "../../utils/truncateString";
import { TodoItemWrapper, Logo } from "./TodoItem.styled";

const TodoItem = ({ item }) => (
  <TodoItemWrapper>
    <Logo
      source={{
        uri: "https://reactnative.dev/img/tiny_logo.png",
      }}
    />
    <Text>{truncateString(item.title, 20)}</Text>
  </TodoItemWrapper>
);

export default TodoItem;
