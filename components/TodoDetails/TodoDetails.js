import React, { useContext } from "react";
import { ActivityIndicator, View } from "react-native";

import TodosContext from "../../context/TodosContext";
import TodoDetailsHeader from "./TodoDetailsHeader";
import TodoDetailsBody from "./TodoDetailsBody";
import { StyledViewCenter } from "../../style/common.styled";
import { StyledTodoDetailsWrapper } from "./TodoDetails.styled";

const TodoDetails = ({ route }) => {
  const { item } = route.params;
  const todosContext = useContext(TodosContext);
  const { addImage, _updateTodo } = todosContext.dispatch;

  return (
    <View>
      {item ? (
        <StyledTodoDetailsWrapper>
          <TodoDetailsHeader item={item} addImage={addImage} />
          <TodoDetailsBody item={item} _updateTodo={_updateTodo} />
        </StyledTodoDetailsWrapper>
      ) : (
        <StyledViewCenter>
          <ActivityIndicator size="large" />
        </StyledViewCenter>
      )}
    </View>
  );
};

export default TodoDetails;
