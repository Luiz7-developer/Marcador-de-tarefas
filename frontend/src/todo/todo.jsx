import React from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

// const URL = "http://localhost:3001/api/todos";

export default (props) => (
  <div>
    <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
    <TodoForm />
    <TodoList />
  </div>
);
