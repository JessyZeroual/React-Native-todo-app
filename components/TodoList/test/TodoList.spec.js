import React from "react";
import TestRenderer, { act } from "react-test-renderer";
import { TodosContextProvider } from "../../../context/TodosContext";
import { FlatList } from "react-native";
import TodoList from "../TodoList";

jest.mock("../../TodoItem/TodoItem", () => () => "View");

const todos = [
  {
    id: "id-1",
    name: "Todo-1",
  },
  {
    id: "id-2",
    name: "Todo-2",
  },
  {
    id: "id-3",
    name: "Todo-3",
  },
];

const fetchTodos = jest.fn(() =>
  todos.concat([
    {
      id: "id-4",
      name: "Todo-4",
    },
    {
      id: "id-5",
      name: "Todo-5",
    },
    {
      id: "id-6",
      name: "Todo-6",
    },
  ])
);

describe("TodoList", () => {
  let renderer;

  beforeEach(() => {
    act(() => {
      renderer = TestRenderer.create(
        <TodosContextProvider
          value={{
            state: { todos },
            dispatch: { fetchTodos },
          }}
        >
          <TodoList />
        </TodosContextProvider>
      );
    });
  });

  describe("When TodoList is mounted", () => {
    it("renders correctly", () => {
      expect(renderer).toMatchSnapshot();
    });

    it("receives a list of todos", () => {
      expect(renderer.root.findByType(FlatList).props.data.length).toEqual(3);
    });
  });

  describe("When list on end reached", () => {
    it("Fetch more todos", () => {
      act(() => {
        renderer.update(
          <TodosContextProvider
            value={{
              state: {
                todos: renderer.root.findByType(FlatList).props.onEndReached(),
              },
              dispatch: { fetchTodos },
            }}
          >
            <TodoList />
          </TodosContextProvider>
        );
      });

      expect(fetchTodos).toHaveBeenCalledTimes(1);
      expect(fetchTodos).toHaveBeenCalledWith({ needMoreTodos: true });
      expect(renderer.root.findByType(FlatList).props.data.length).toEqual(6);
    });
  });
});
