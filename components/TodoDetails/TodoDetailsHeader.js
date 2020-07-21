import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";

import TodoDetailsSettings from "./TodoDetailsSettings";

import Modal, {
  ModalTitle,
  SlideAnimation,
  ModalContent,
} from "react-native-modals";
import {
  StyledImageWrapper,
  StyledImage,
  StyledTitle,
  StyledWrapperHeader,
  StyledHeader,
} from "./TodoDetails.styled";

const TodoDetailsHeader = ({ item, addImage }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  return (
    <>
      <StyledImageWrapper>
        <StyledImage
          source={{
            uri: item.imageUri
              ? item.imageUri
              : "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
          }}
        />
      </StyledImageWrapper>
      <StyledWrapperHeader>
        <StyledHeader>
          <StyledTitle>{item.title}</StyledTitle>
          <Icon
            style={{ marginLeft: "auto" }}
            name="setting"
            color="grey"
            size={30}
            onPress={() => setIsVisibleModal(true)}
          ></Icon>
          <Modal
            modalTitle={<ModalTitle title={item.title} />}
            visible={isVisibleModal}
            modalAnimation={
              new SlideAnimation({
                slideFrom: "bottom",
              })
            }
            onTouchOutside={() => {
              setIsVisibleModal(false);
            }}
          >
            <ModalContent>
              <TodoDetailsSettings item={item} addImage={addImage} />
            </ModalContent>
          </Modal>
        </StyledHeader>
      </StyledWrapperHeader>
    </>
  );
};

export default TodoDetailsHeader;
