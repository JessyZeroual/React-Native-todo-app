import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const CheckBox = ({ completed }) => {
  return (
    <Icon.Button
      name={completed ? "check-box" : "check-box-outline-blank"}
      backgroundColor="rgba(0,0,0,0)"
      color="#dcdcdc"
      underlayColor="rgba(0,0,0,0)"
      size={20}
      iconStyle={{ marginLeft: -10, marginRight: 0 }}
      activeOpacity={1}
      borderRadius={5}
      // onPress={() => !completed}
    ></Icon.Button>
  );
};

module.exports = CheckBox;
