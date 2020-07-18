import styled from "styled-components/native";
import { primaryColor } from "../../constant/style-constants";

export const TodoItemWrapper = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: #dcdcdc;
  height: 80px;
  margin: 10px;
  border-radius: 5px;
`;

export const Logo = styled.Image`
  margin: 0px 10px;
  height: 50px;
  width: 50px;
`;
