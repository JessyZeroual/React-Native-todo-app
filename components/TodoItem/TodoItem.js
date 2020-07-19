import React from "react";
import { Text } from "react-native";

import SwipeRow from "../../utils/SwipeRow";
import truncateString from "../../utils/truncateString";
import { TodoItemWrapper, Logo } from "./TodoItem.styled";

const TodoItem = ({ item }) => {
  return (
    <SwipeRow
      key={item.key}
      item={item}
      swipeThreshold={-150}
      onSwipe={() => console.log(`delete ${item.title}`)}
    >
      <TodoItemWrapper>
        <Text>{truncateString(item.title, 20)}</Text>
        <Logo
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </TodoItemWrapper>
    </SwipeRow>
  );
};

export default TodoItem;
