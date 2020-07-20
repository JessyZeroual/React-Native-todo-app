import styled from "styled-components/native";
import { primaryColor, secondaryColor } from "../../constant/style-constants";

export const TodoDetailsWrapper = styled.View`
  display: flex;
  align-items: center;
  height: 100%;
  background: #fff;
  border-bottom-color: ${secondaryColor};
  border-bottom-width: 1.5px;
`;

export const Title = styled.Text`
  padding: 20px;
  font-size: 20px;
`;
export const Label = styled.Text`
  font-size: 15px;
`;

export const ImageWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  padding: 20px;
  width: 100%;

  background: ${primaryColor};
`;

export const CardWrapper = styled.View`
  width: 100%;
  padding: 0px 20px;
`;

export const CardMedia = styled.View`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 2px;
  border-color: ${secondaryColor};
`;

export const Card = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 5px 0px;
  width: 100%;
`;

export const CardTitle = styled.Text`
  padding: 20px;
  font-size: 20px;
`;

export const Image = styled.Image`
  border-radius: 40px;
  height: 200px;
  width: 200px;
`;

export const Avatar = styled.Image`
  border-radius: 40px;
  height: 50px;
  width: 50px;
`;
