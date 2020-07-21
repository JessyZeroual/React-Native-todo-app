import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import {
  Avatar,
  CardWrapper,
  CardTitle,
  CardMedia,
  Card,
  Label,
} from "./TodoDetails.styled";

export const users = {
  1: {
    name: "Vinicius",
    avatarUrl:
      "https://gravatar.com/avatar/264ae05899a433e86369cefc21fd0189?s=400&d=robohash&r=x",
  },
  2: {
    name: "Ronaldo",
    avatarUrl:
      "https://gravatar.com/avatar/4c9cd49cb0bc35520a4b09015bf6cf75?s=400&d=robohash&r=x",
  },
};

const TodoDetailsBody = ({ item }) => (
  <CardWrapper>
    <Label>Status:</Label>
    {item.completed ? (
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
            uri: users[item.userId].avatarUrl,
          }}
        />
      </CardMedia>

      <CardTitle>{users[item.userId].name}</CardTitle>
    </Card>
  </CardWrapper>
);

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

export default TodoDetailsBody;