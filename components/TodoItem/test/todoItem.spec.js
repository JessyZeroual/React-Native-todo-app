import React from "react";
import TestRenderer, { act } from "react-test-renderer";
import { TodosContextProvider } from "../../../context/TodosContext";
import TodoItem from "../TodoItem";

jest.mock("../../../utils/SwipeRow");
jest.mock("../../../utils/truncateString");

const _updateTodo = jest.fn();
const _deleteTodo = jest.fn();

describe("TodoItem", () => {
  let renderer;

  const mockDataItem = {
    id: "id-1",
    name: "Todo-1",
  };

  beforeEach(() => {
    act(() => {
      renderer = TestRenderer.create(
        <TodosContextProvider
          value={{
            dispatch: { _updateTodo, _deleteTodo },
          }}
        >
          <TodoItem item={mockDataItem} />
        </TodosContextProvider>
      );
    });
  });

  describe("When TodoList is mounted", () => {
    it("renders correctly", () => {
      expect(renderer).toMatchSnapshot();
    });

    it("has item in pros", () => {
      expect(renderer.root.props.item).toEqual(mockDataItem);
    });
  });
});
