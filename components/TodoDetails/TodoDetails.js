import React, { useState, useEffect } from "react";
import { Button, ActivityIndicator, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ViewCenter } from "../../style/common.styled";

import { getTodoById } from "../../api/todos";

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

  const navigation = useNavigation();
  return (
    <View>
      {isLoading ? (
        <ViewCenter>
          <ActivityIndicator size="large" />
        </ViewCenter>
      ) : (
        <View>
          <Text>{todo.title}</Text>
          <Button
            title="Back"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      )}
    </View>
  );
};

export default TodoDetails;
