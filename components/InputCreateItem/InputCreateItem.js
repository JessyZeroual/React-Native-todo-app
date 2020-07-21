import React, { useState, useContext } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import TodosContext from "../../context/TodosContext";
import { shadow } from "../../constant/style-constants";
import {
  StyledInputCreateItemWrapper,
  StyledShape,
  StyledForm,
  StyledInput,
  StyledButtonSubmit,
} from "./InputCreateItem.styled";

const InputCreateItem = () => {
  const [text, setText] = useState("");
  const todosContext = useContext(TodosContext);
  const { _postTodo } = todosContext.dispatch;
  return (
    <StyledInputCreateItemWrapper>
      <StyledShape />
      <StyledForm style={shadow}>
        <StyledInput
          onChangeText={(text) => setText(text)}
          placeholder="Add item"
          placeholderTextColor="grey"
          value={text}
          onSubmitEditing={() => _postTodo(text).then(setText(""))}
        />

        <StyledButtonSubmit onPress={() => _postTodo(text).then(setText(""))}>
          <Icon name="add" color="#fff" size={20}></Icon>
        </StyledButtonSubmit>
      </StyledForm>
    </StyledInputCreateItemWrapper>
  );
};

export default InputCreateItem;
