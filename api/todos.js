export const getTodos = (start, LIMIT) => {
  return fetch(
    `https://my-json-server.typicode.com/JessyZeroual/json-server/todos?_start=${start}&_limit=${LIMIT}`
  )
    .then((res) => res.json())
    .then((data) => data);
};
