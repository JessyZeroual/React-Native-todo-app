import React from "react";
import TestRenderer, { act } from "react-test-renderer";
import TodoItem from "../TodoItem";

jest.mock("../../../utils/truncateString");

describe("TodoItem", () => {
  let renderer;

  const mockDataItem = {
    id: "id-1",
    name: "Todo-1",
  };

  beforeEach(() => {
    act(() => {
      renderer = TestRenderer.create(<TodoItem item={mockDataItem} />);
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
