import React from "react";
import InputCreateItem from "../InputCreateItem/InputCreateItem";
import { Container, HeaderWrapper, BrandLogo } from "./Header.styled";

const Header = () => (
  <Container>
    <HeaderWrapper>
      <BrandLogo>todo-app</BrandLogo>
    </HeaderWrapper>
    <InputCreateItem />
  </Container>
);

export default Header;
