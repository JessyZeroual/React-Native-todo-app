import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Modal, {
  ModalTitle,
  SlideAnimation,
  ModalContent,
} from "react-native-modals";

import TodoDetailsSettings from "./TodoDetailsSettings";

import {
  ImageWrapper,
  Image,
  Title,
  WrapperHeader,
  Header,
} from "./TodoDetails.styled";

const TodoDetailsHeader = ({ todo }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  return (
    <>
      <ImageWrapper>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </ImageWrapper>
      <WrapperHeader>
        <Header>
          <Title>{todo.title}</Title>
          <Icon
            style={{ marginLeft: "auto" }}
            name="setting"
            color="grey"
            size={30}
            onPress={() => setIsVisibleModal(true)}
          ></Icon>
          <Modal
            modalTitle={<ModalTitle title={todo.title} />}
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
              <TodoDetailsSettings todo={todo} />
            </ModalContent>
          </Modal>
        </Header>
      </WrapperHeader>
    </>
  );
};

export default TodoDetailsHeader;
