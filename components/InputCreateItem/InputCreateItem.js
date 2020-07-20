import React, { useState } from "react";

import Icon from "react-native-vector-icons/MaterialIcons";
import { Form, Input, ButtonSubmit } from "./InputCreateItem.styled";

const InputCreateItem = () => {
  const [text, setText] = useState("");
  return (
    <Form style={shadow}>
      <Input
        onChangeText={(text) => setText({ text })}
        placeholder="Add item"
        placeholderTextColor="grey"
        value={text}
        onSubmitEditing={() => console.log("POST Todo")}
      />

      <ButtonSubmit onPress={() => console.log("POST Todo")}>
        <Icon name="add" color="#fff" size={20}></Icon>
      </ButtonSubmit>
    </Form>
  );
};

const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.20,
  shadowRadius: 1.41,
  
  elevation: 2,
};

export default InputCreateItem;
