const BASE_URL = "https://my-json-server.typicode.com/JessyZeroual/json-server";

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
