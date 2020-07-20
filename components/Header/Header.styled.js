import styled from "styled-components/native";
import { primaryColor, secondaryColor } from "../../constant/style-constants";

export const Container = styled.View`
  border-bottom-color: ${secondaryColor};
  border-bottom-width: 1.5;
`;

export const HeaderWrapper = styled.View`
  background: ${primaryColor};
  padding: 20px;
`;

export const BrandLogo = styled.Text`
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  padding: 20px 0px;
`;
