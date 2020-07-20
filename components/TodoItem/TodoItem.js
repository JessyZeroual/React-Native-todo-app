import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import TodosContext from "../../context/TodosContext";
import CheckBox from "../../utils/CheckBox/CheckBox";
import SwipeRow from "../../utils/SwipeRow";
import truncateString from "../../utils/truncateString";
import { TodoItemWrapper, Title, Image } from "./TodoItem.styled";

const TodoItem = ({ item }) => {
  const todosContext = useContext(TodosContext);
  const { _updateTodo, _deleteTodo } = todosContext.dispatch;

  const navigation = useNavigation();

  const onPressCheckBox = (completed) => {
    _updateTodo(item.id, item.userId, item.title, completed);
  };

  return (
    <SwipeRow
      key={item.id}
      item={item}
      swipeThreshold={-150}
      onSwipe={() => _deleteTodo(item.id)}
    >
      <TodoItemWrapper
        onPress={() => {
          navigation.navigate("TodoDetails", {
            itemId: item.id,
          });
        }}
      >
        <CheckBox
          completed={item.completed}
          onPressCheckBox={onPressCheckBox}
        />
        <Title completed={item.completed}>
          {truncateString(item.title, 20)}
        </Title>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </TodoItemWrapper>
    </SwipeRow>
  );
};

export default TodoItem;
