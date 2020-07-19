import React from "react";
import { Text } from "react-native";

import CheckBox from "../../utils/CheckBox";
import SwipeRow from "../../utils/SwipeRow";
import truncateString from "../../utils/truncateString";
import { TodoItemWrapper, Title, Logo } from "./TodoItem.styled";

const TodoItem = ({ item }) => {
  return (
    <SwipeRow
      key={item.key}
      item={item}
      swipeThreshold={-150}
      onSwipe={() => console.log(`delete ${item.title}`)}
    >
      <TodoItemWrapper>
        <CheckBox completed={item.completed} />
        <Title completed={item.completed}>
          {truncateString(item.title, 25)}
        </Title>
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
