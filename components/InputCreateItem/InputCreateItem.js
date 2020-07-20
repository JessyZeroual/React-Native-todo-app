import React, { useState, useContext } from "react";
import TodosContext from "../../context/TodosContext";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  InputCreateItemWrapper,
  Shape,
  Form,
  Input,
  ButtonSubmit,
} from "./InputCreateItem.styled";

const InputCreateItem = () => {
  const [text, setText] = useState("");
  const todosContext = useContext(TodosContext);
  const { _postTodo } = todosContext.dispatch;
  return (
    <InputCreateItemWrapper>
      <Shape />
      <Form style={shadow}>
        <Input
          onChangeText={(text) => setText(text)}
          placeholder="Add item"
          placeholderTextColor="grey"
          value={text}
          onSubmitEditing={() => _postTodo(text).then(setText(""))}
        />

        <ButtonSubmit onPress={() => _postTodo(text).then(setText(""))}>
          <Icon name="add" color="#fff" size={20}></Icon>
        </ButtonSubmit>
      </Form>
    </InputCreateItemWrapper>
  );
};

const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,

  elevation: 2,
};

export default InputCreateItem;
