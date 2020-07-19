import React from "react";

const TodosContext = React.createContext({});

export const TodosContextProvider = TodosContext.Provider;
export const TodosContextConsumer = TodosContext.Consumer;
export default TodosContext;
