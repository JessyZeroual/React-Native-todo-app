import { IP_ADRESS } from "../constant/config";
import { users } from "./users";
const BASE_URL = `http://${IP_ADRESS}:3000`;

export const getTodoById = (id) => {
  return fetch(`${BASE_URL}/todos/${id}`)
    .then((res) => res.json())
    .then((data) => data);
};

export const getTodos = (start, LIMIT) => {
  return fetch(`${BASE_URL}/todos?_start=${start}&_limit=${LIMIT}`)
    .then((res) => res.json())
    .then((data) => data);
};

export const deleteTodo = (id) => {
  return fetch(`${BASE_URL}/todos/${id}`, {
    headers: { "Content-Type": "application/json" },
    method: "DELETE",
  });
};

export const updateTodo = (id, completed, userId, title) => {
  return fetch(`${BASE_URL}/todos/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      completed,
      userId,
      title,
    }),
  });
};

export const postTodo = (title) => {
  return fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: Math.floor(Math.random() * Object.keys(users).length) + 1,
      title,
      completed: false,
    }),
  });
};
