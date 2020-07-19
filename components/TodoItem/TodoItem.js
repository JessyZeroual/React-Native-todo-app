import React from "react";

import CheckBox from "../../utils/CheckBox";
import SwipeRow from "../../utils/SwipeRow";
import truncateString from "../../utils/truncateString";
import { TodoItemWrapper, Title, Logo } from "./TodoItem.styled";

const TodoItem = ({ item, _deleteTodo, _updateTodo }) => {
  const onPressCheckBox = (completed) => {
    _updateTodo(item.id, completed);
  };

  return (
    <SwipeRow
      key={item.id}
      item={item}
      swipeThreshold={-150}
      onSwipe={() => _deleteTodo(item.id)}
    >
      <TodoItemWrapper>
        <CheckBox
          completed={item.completed}
          onPressCheckBox={onPressCheckBox}
        />
        <Title completed={item.completed}>
          {truncateString(item.title, 20)}
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
