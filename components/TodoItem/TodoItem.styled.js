import styled from "styled-components/native";
import { primaryColor } from "../../constant/style-constants";

export const TodoItemWrapper = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  background: #fff;
  height: 80px;
  border-radius: 5px;
  margin: 5px 0px;
  padding: 0px 20px;
`;

export const Title = styled.Text`
  text-decoration: ${({ completed }) => completed && "line-through"};
`;

export const Logo = styled.Image`
  margin-left: auto;
  height: 50px;
  width: 50px;
`;
