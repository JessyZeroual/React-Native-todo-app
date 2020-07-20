import React, { useContext } from "react";
import { ActivityIndicator, View } from "react-native";

import TodosContext from "../../context/TodosContext";

import { Container } from "./Home.styled";
import { ViewCenter } from "../../style/common.styled";

import TodoList from "../TodoList/TodoList";
import InputCreateItem from "../InputCreateItem/InputCreateItem";

const Home = () => {
  const todosContext = useContext(TodosContext);
  const { isLoading } = todosContext.state;

  return (
    <Container>
      {isLoading ? (
        <ViewCenter>
          <ActivityIndicator size="large" />
        </ViewCenter>
      ) : (
        <View>
          <InputCreateItem />
          <TodoList />
        </View>
      )}
    </Container>
  );
};

export default Home;
