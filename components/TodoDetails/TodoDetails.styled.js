import styled from "styled-components/native";
import { primaryColor, secondaryColor } from "../../constant/style-constants";

export const StyledTodoDetailsWrapper = styled.View`
  display: flex;
  align-items: center;
  height: 100%;
  background: #fff;
  border-bottom-color: ${secondaryColor};
  border-bottom-width: 1.5px;
`;
export const StyledWrapperHeader = styled.View`
  width: 100%;
  background: ${primaryColor};
`;

export const StyledHeader = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  background: white;
  border-top-right-radius: 40px;
  padding: 0px 20px;
`;

export const StyledTitle = styled.Text`
  padding: 15px;
  font-size: 25px;
`;
export const StyledLabel = styled.Text`
  font-size: 15px;
`;

export const StyledImageWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 100px;

  padding: 20px;
  width: 100%;

  background: ${primaryColor};
`;

export const StyledCardWrapper = styled.View`
  width: 100%;
  padding: 0px 20px;
`;

export const StyledCardMedia = styled.View`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 2px;
  border-color: ${secondaryColor};
`;

export const StyledCard = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 5px 0px;
  width: 100%;
`;

export const StyledCardTitle = styled.Text`
  padding: 20px;
  font-size: 20px;
`;

export const StyledImage = styled.Image`
  border-radius: 40px;
  height: 200px;
  width: 200px;
`;

export const StyledAvatar = styled.Image`
  border-radius: 40px;
  height: 50px;
  width: 50px;
`;