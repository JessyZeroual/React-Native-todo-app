import styled from "styled-components/native";
import { primaryColor } from "../../constant/style-constants";

export const Form = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: #fff;
  height: 40px;
  border-radius: 40px;
  margin: 10px 20px;
  margin-top: -20px;
  padding-left: 20px;
  padding-right: 10px;
`;

export const Input = styled.TextInput`
  flex: 1;
`;

export const ButtonSubmit = styled.TouchableHighlight`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  background-color: ${primaryColor};
  border-radius: 30px;
`;
