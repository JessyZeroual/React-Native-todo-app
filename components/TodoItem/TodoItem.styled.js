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
`;

export const Logo = styled.Image`
  margin: 0px 10px;
  margin-left: auto;
  height: 50px;
  width: 50px;
`;
