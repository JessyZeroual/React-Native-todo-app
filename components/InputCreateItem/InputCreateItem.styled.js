import styled from "styled-components/native";
import { primaryColor, secondaryColor } from "../../constant/style-constants";

export const StyledInputCreateItemWrapper = styled.View`
  border-bottom-color: ${secondaryColor};
  border-bottom-width: 0.5px;
`;

export const StyledShape = styled.View`
  background: ${primaryColor};
  padding: 10px;
`;

export const StyledForm = styled.View`
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

export const StyledInput = styled.TextInput`
  flex: 1;
`;

export const StyledButtonSubmit = styled.TouchableHighlight`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  background-color: ${primaryColor};
  border-radius: 30px;
`;
