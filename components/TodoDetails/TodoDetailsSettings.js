import React from "react";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/AntDesign";

import { primaryColor, shadow } from "../../constant/style-constants";
import {
  StyledCardMedia,
  StyledCardTitle,
  StyledCard,
} from "./TodoDetails.styled";

const TodoDetailsSettings = ({ item, addImage }) => {
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    addImage(item.id, pickerResult.uri);
  };

  return (
    <StyledCard onPress={openImagePickerAsync} style={shadow}>
      <StyledCardMedia>
        <Icon name="upload" color={primaryColor} size={25}></Icon>
      </StyledCardMedia>
      <StyledCardTitle>Edit image</StyledCardTitle>
    </StyledCard>
  );
};

export default TodoDetailsSettings;
