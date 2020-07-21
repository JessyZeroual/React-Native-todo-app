import React from "react";
import { ActivityIndicator, View } from "react-native";

import TodoDetailsHeader from "./TodoDetailsHeader";
import TodoDetailsBody from "./TodoDetailsBody";
import { ViewCenter } from "../../style/common.styled";
import { TodoDetailsWrapper } from "./TodoDetails.styled";

const TodoDetails = ({ route }) => {
  const { item } = route.params;

  return (
    <View>
      {item ? (
        <TodoDetailsWrapper>
          <TodoDetailsHeader item={item} />
          <TodoDetailsBody item={item} />
        </TodoDetailsWrapper>
      ) : (
        <ViewCenter>
          <ActivityIndicator size="large" />
        </ViewCenter>
      )}
    </View>
  );
};

export default TodoDetails;
