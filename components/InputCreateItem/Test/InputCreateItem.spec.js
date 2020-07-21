import React from "react";
import { TextInput } from "react-native";
import TestRenderer, { act } from "react-test-renderer";
import { TodosContextProvider } from "../../../context/TodosContext";
import InputCreateItem from "../InputCreateItem";

const mockPostTodo = jest.fn(() => Promise.resolve());

describe("InputCreateItem", () => {
  let renderer;
  let input;

  beforeEach(() => {
    act(() => {
      renderer = TestRenderer.create(
        <TodosContextProvider
          value={{
            dispatch: { _postTodo: mockPostTodo },
          }}
        >
          <InputCreateItem />
        </TodosContextProvider>
      );
    });
  });

  describe("When InputCreateItem is mounted", () => {
    it("renders correctly", () => {
      expect(renderer).toMatchSnapshot();
    });
  });

  describe("When we handle input", () => {
    it("change it's value ", async () => {
      input = renderer.root.findByType(TextInput);
      await act(async () => {
        input.props.onChangeText("todo-1");
      });
      expect(input.props.value).toEqual("todo-1");
    });
  });

  describe("When submitting input ", () => {
    it("call function _postTodo ", async () => {
      await act(async () => {
        input.props.onSubmitEditing();
        expect(mockPostTodo).toHaveBeenCalledTimes(1);
        expect(mockPostTodo).toHaveBeenCalledWith(input.props.value);
      });
    });
  });
});
