import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

import TodoDetailsHeader from "./TodoDetailsHeader";
import TodoDetailsBody from "./TodoDetailsBody";
import { getTodoById } from "../../api/todos";
import { ViewCenter } from "../../style/common.styled";
import { TodoDetailsWrapper } from "./TodoDetails.styled";

const TodoDetails = ({ route }) => {
  const { itemId } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [todo, setTodo] = useState({});

  useEffect(() => {
    getTodoById(itemId).then((data) => {
      setTodo(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <View>
      {isLoading ? (
        <ViewCenter>
          <ActivityIndicator size="large" />
        </ViewCenter>
      ) : (
        <TodoDetailsWrapper>
          <TodoDetailsHeader todo={todo} />
          <TodoDetailsBody todo={todo} />
        </TodoDetailsWrapper>
      )}
    </View>
  );
};

export default TodoDetails;
