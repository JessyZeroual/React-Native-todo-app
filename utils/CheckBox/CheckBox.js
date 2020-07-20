import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { primaryColor, secondaryColor } from "../../constant/style-constants";
import { CheckBoxWrapper } from "./CheckBox.styled";

const CheckBox = ({ completed, onPressCheckBox }) => {
  return (
    <CheckBoxWrapper onPress={() => onPressCheckBox(!completed)}>
      <Icon
        style={{ zIndex: 999999 }}
        name={completed ? "check-box" : "check-box-outline-blank"}
        backgroundColor="transparent"
        color={completed ? primaryColor : secondaryColor}
        underlayColor="transparent"
        size={25}
        activeOpacity={1}
        borderRadius={5}
      ></Icon>
    </CheckBoxWrapper>
  );
};

module.exports = CheckBox;
