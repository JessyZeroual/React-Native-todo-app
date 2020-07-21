import React, { useContext } from "react";
import { ActivityIndicator, View } from "react-native";

import TodosContext from "../../context/TodosContext";
import TodoList from "../TodoList/TodoList";
import InputCreateItem from "../InputCreateItem/InputCreateItem";

import { StyledContainer } from "./Home.styled";
import { StyledViewCenter } from "../../style/common.styled";

const Home = () => {
  const todosContext = useContext(TodosContext);
  const { isLoading } = todosContext.state;

  return (
    <StyledContainer>
      {isLoading ? (
        <StyledViewCenter>
          <ActivityIndicator size="large" />
        </StyledViewCenter>
      ) : (
        <View>
          <InputCreateItem />
          <TodoList />
        </View>
      )}
    </StyledContainer>
  );
};

export default Home;
