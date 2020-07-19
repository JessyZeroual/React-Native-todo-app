import styled from "styled-components/native";
import { primaryColor } from "../../constant/style-constants";
import Animated from "react-native-reanimated";

export const TodoItemWrapper = styled(Animated.View)`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: #fff;
  height: 80px;
  margin: 10px;
  border-radius: 5px;
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
