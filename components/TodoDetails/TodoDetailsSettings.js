import React from "react";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/AntDesign";

import { primaryColor } from "../../constant/style-constants";
import { CardMedia, CardTitle, Card } from "./TodoDetails.styled";

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
    <Card onPress={openImagePickerAsync} style={shadow}>
      <CardMedia>
        <Icon name="upload" color={primaryColor} size={25}></Icon>
      </CardMedia>
      <CardTitle>Edit image</CardTitle>
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
