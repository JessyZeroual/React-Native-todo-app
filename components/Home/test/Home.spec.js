import React from "react";
import TestRenderer, { act } from "react-test-renderer";
import { ActivityIndicator } from "react-native";
import { TodosContextProvider } from "../../../context/TodosContext";
import Home from "../Home";
import InputCreateItem from "../../InputCreateItem/InputCreateItem";
import TodoList from "../../TodoList/TodoList";

jest.mock("../../InputCreateItem/InputCreateItem", () => () =>
  "InputCreateItem"
);
jest.mock("../../TodoList/TodoList", () => () => "TodoList");

describe("Home", () => {
  let renderer;

  describe("When Home is mounted", () => {
    beforeEach(() => {
      act(() => {
        renderer = TestRenderer.create(
          <TodosContextProvider
            value={{
              state: { isLoading: false },
            }}
          >
            <Home />
          </TodosContextProvider>
        );
      });
    });

    it("renders correctly", () => {
      expect(renderer).toMatchSnapshot();
    });

    it("display component InputCreateItem", () => {
      expect(renderer.root.findByType(InputCreateItem)).toBeTruthy();
    });

    it("display components TodoList", () => {
      expect(renderer.root.findByType(TodoList)).toBeTruthy();
    });
  });

  describe("When Home is unmounted", () => {
    beforeEach(() => {
      act(() => {
        renderer = TestRenderer.create(
          <TodosContextProvider
            value={{
              state: { isLoading: true },
            }}
          >
            <Home />
          </TodosContextProvider>
        );
      });
    });

    it("display ActivityIndicator ", () => {
      expect(renderer.root.findByType(ActivityIndicator)).toBeTruthy();
    });
  });
});
