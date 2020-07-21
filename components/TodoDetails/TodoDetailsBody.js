import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { users } from "../../api/users";
import { shadow } from "../../constant/style-constants";
import {
  StyledAvatar,
  StyledCardWrapper,
  StyledCardTitle,
  StyledCardMedia,
  StyledCard,
  StyledLabel,
} from "./TodoDetails.styled";

const TodoDetailsBody = ({ item, _updateTodo }) => {
  const onPressStatus = (completed) => {
    _updateTodo(item.id, item.userId, item.title, completed);
  };
  return (
    <StyledCardWrapper>
      <StyledLabel>Status:</StyledLabel>
      {item.completed ? (
        <StyledCard style={shadow} onPress={() => onPressStatus(false)}>
          <StyledCardMedia>
            <Icon name="check" color="#5cb85c" size={25}></Icon>
          </StyledCardMedia>
          <StyledCardTitle>Completed</StyledCardTitle>
        </StyledCard>
      ) : (
        <StyledCard style={shadow} onPress={() => onPressStatus(true)}>
          <StyledCardMedia>
            <Icon name="ellipsis1" color="#d9534f" size={25}></Icon>
          </StyledCardMedia>
          <StyledCardTitle>In progress</StyledCardTitle>
        </StyledCard>
      )}
      <StyledLabel>Created by:</StyledLabel>
      <StyledCard style={shadow}>
        <StyledCardMedia>
          <StyledAvatar
            source={{
              uri: users[item.userId].avatarUrl,
            }}
          />
        </StyledCardMedia>

        <StyledCardTitle>{users[item.userId].name}</StyledCardTitle>
      </StyledCard>
    </StyledCardWrapper>
  );
};

export default TodoDetailsBody;
