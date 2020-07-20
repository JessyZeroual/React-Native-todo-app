import styled from "styled-components/native";
import { secondaryColor } from "../../constant/style-constants";

export const TodoItemWrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: #fff;
  height: 70px;
  border-bottom-color: ${secondaryColor};
  border-bottom-width: 1.5px;
  padding: 0px 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  text-decoration: ${({ completed }) => completed && "line-through"};
`;

export const Logo = styled.Image`
  margin-left: auto;
  height: 50px;
  width: 50px;
`;
