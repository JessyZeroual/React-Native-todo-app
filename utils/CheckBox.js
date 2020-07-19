import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { primaryColor, secondaryColor } from "../constant/style-constants";

const CheckBox = ({ completed, onPressCheckBox }) => {
  return (
    <Icon.Button
      name={completed ? "check-box" : "check-box-outline-blank"}
      backgroundColor="transparent"
      color={completed ? secondaryColor : primaryColor}
      underlayColor="transparent"
      size={25}
      iconStyle={{ marginLeft: -10, marginRight: 0 }}
      activeOpacity={1}
      borderRadius={5}
      onPress={() => onPressCheckBox(!completed)}
    ></Icon.Button>
  );
};

module.exports = CheckBox;
