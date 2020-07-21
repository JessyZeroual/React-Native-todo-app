import React, { useState, useContext } from "react";
import Icon from "react-native-vector-icons/AntDesign";

import TodosContext from "../../context/TodosContext";
import TodoDetailsSettings from "./TodoDetailsSettings";

import Modal, {
  ModalTitle,
  SlideAnimation,
  ModalContent,
} from "react-native-modals";
import {
  ImageWrapper,
  Image,
  Title,
  WrapperHeader,
  Header,
} from "./TodoDetails.styled";

const TodoDetailsHeader = ({ item }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const todosContext = useContext(TodosContext);
  const { addImage } = todosContext.dispatch;
  return (
    <>
      <ImageWrapper>
        <Image
          source={{
            uri: item.imageUri
              ? item.imageUri
              : "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
          }}
        />
      </ImageWrapper>
      <WrapperHeader>
        <Header>
          <Title>{item.title}</Title>
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
        </Header>
      </WrapperHeader>
    </>
  );
};

export default TodoDetailsHeader;
