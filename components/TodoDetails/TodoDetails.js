import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { ViewCenter } from "../../style/common.styled";
import {
  TodoDetailsWrapper,
  ImageWrapper,
  Image,
  Avatar,
  CardWrapper,
  CardTitle,
  CardMedia,
  Card,
  Title,
  Label,
} from "./TodoDetails.styled";

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

  const users = {
    1: {
      name: "Vinicius",
      avatarUrl:
        "https://gravatar.com/avatar/264ae05899a433e86369cefc21fd0189?s=400&d=robohash&r=x",
    },
  };
  return (
    <View>
      {isLoading ? (
        <ViewCenter>
          <ActivityIndicator size="large" />
        </ViewCenter>
      ) : (
        <TodoDetailsWrapper>
          <ImageWrapper>
            <Image
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
          </ImageWrapper>

          <Title>{todo.title}</Title>
          <CardWrapper>
            <Label>Status:</Label>
            {todo.completed ? (
              <Card style={shadow}>
                <CardMedia>
                  <Icon name="check" color="#5cb85c" size={25}></Icon>
                </CardMedia>
                <CardTitle>Completed</CardTitle>
              </Card>
            ) : (
              <Card style={shadow}>
                <CardMedia>
                  <Icon name="ellipsis1" color="#d9534f" size={25}></Icon>
                </CardMedia>
                <CardTitle>In progress</CardTitle>
              </Card>
            )}
            <Label>Created by:</Label>
            <Card style={shadow}>
              <CardMedia>
                <Avatar
                  source={{
                    uri: users[todo.userId].avatarUrl,
                  }}
                />
              </CardMedia>

              <CardTitle>{users[todo.userId].name}</CardTitle>
            </Card>
          </CardWrapper>
        </TodoDetailsWrapper>
      )}
    </View>
  );
};

const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
};

export default TodoDetails;
