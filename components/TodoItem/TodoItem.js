import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import TodosContext from "../../context/TodosContext";
import CheckBox from "../../utils/CheckBox/CheckBox";
import SwipeRow from "../../utils/SwipeRow";
import truncateString from "../../utils/truncateString";
import { StyledTodoItemWrapper, StyledTitle, StyledImage } from "./TodoItem.styled";

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
      <StyledTodoItemWrapper
        onPress={() => {
          navigation.navigate("TodoDetails", {
            item: item,
          });
        }}
      >
        <CheckBox
          completed={item.completed}
          onPressCheckBox={onPressCheckBox}
        />
        <StyledTitle completed={item.completed}>
          {truncateString(item.title, 20)}
        </StyledTitle>
        <StyledImage
          source={{
            uri: item.imageUri
              ? item.imageUri
              : "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
          }}
        />
      </StyledTodoItemWrapper>
    </SwipeRow>
  );
};

export default TodoItem;
