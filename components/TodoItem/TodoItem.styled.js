import styled from "styled-components/native";
import { secondaryColor } from "../../constant/style-constants";

export const StyledTodoItemWrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: #fff;
  height: 70px;
  border-bottom-color: ${secondaryColor};
  border-bottom-width: 1.5px;
  padding: 0px 20px;
`;

export const StyledTitle = styled.Text`
  font-size: 16px;
  text-decoration: ${({ completed }) => completed && "line-through"};
`;

export const StyledImage = styled.Image`
  border-radius: 10px;
  margin-left: auto;
  height: 50px;
  width: 50px;
`;
