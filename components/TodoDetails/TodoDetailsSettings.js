import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { primaryColor } from "../../constant/style-constants";

import {
  SettingsWrapper,
  CardWrapper,
  CardMedia,
  CardTitle,
  Card,
} from "./TodoDetails.styled";

const TodoDetailsSettings = ({ todo }) => {
  return (
    <Card>
      <CardMedia onPress={() => console.log("update image")}>
        <Icon name="upload" color={primaryColor} size={25}></Icon>
      </CardMedia>

      <CardTitle onPress={() => console.log("update image")}>
        Edit image
      </CardTitle>
    </Card>
  );
};

const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
};

export default TodoDetailsSettings;
