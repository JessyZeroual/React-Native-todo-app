import React from "react";
import TestRenderer, { act } from "react-test-renderer";
import { ActivityIndicator, View } from "react-native";
import { TodosContextProvider } from "../../../context/TodosContext";
import TodoDetails from "../TodoDetails";

jest.mock("../TodoDetailsBody", () => () => "TodoDetailsHeader");
jest.mock("../TodoDetailsHeader", () => () => "TodoDetailsBody");

const mockaddImage = jest.fn();
const mockUpdateTodo = jest.fn();

const route = {
  params: { item: { id: 1, title: "todo-1" } },
};
const { item } = route.params;

describe("InputCreateItem", () => {
  let renderer;

  beforeEach(() => {
    act(() => {
      renderer = TestRenderer.create(
        <TodosContextProvider
          value={{
            dispatch: { addImage: mockaddImage, _updateTodo: mockUpdateTodo },
          }}
        >
          <TodoDetails route={route} />
        </TodosContextProvider>
      );
    });
  });

  describe("When InputCreateItem is mounted", () => {
    it("renders correctly", () => {
      expect(renderer).toMatchSnapshot();
    });

    it("has item in pros with react-navigation", () => {
      expect(renderer.root.props.route.params.item).toEqual(item);
    });
  });
});



