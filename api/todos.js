export const getTodos = (start, LIMIT) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=${LIMIT}`
  )
    .then((res) => res.json())
    .then((data) => data);
};
