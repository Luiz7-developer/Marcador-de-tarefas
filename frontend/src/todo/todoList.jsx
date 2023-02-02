import React from "react";
import { connect, Connect } from "react-redux";
import { bindActionCreators } from "redux";
import BtnGtid from "../template/btnGrid";
import { markAsDone, MarkAsPending, remove } from "./todoActions";

const TodoList = (props) => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map((todo) => (
      <tr key={todo._id}>
        <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
        <td>
          {/* Butão de tarefa concluida */}
          <BtnGtid
            style="success"
            icon="check"
            hide={todo.done}
            onClick={() => props.markAsDone(todo)}
          ></BtnGtid>

          {/*Butão de pendencia*/}
          <BtnGtid
            style="warning"
            icon="undo"
            hide={!todo.done}
            onClick={() => props.MarkAsPending(todo)}
          ></BtnGtid>

          {/* Butão pra remover */}
          <BtnGtid
            style="danger"
            icon="trash-o"
            onClick={() => props.remove(todo)}
          ></BtnGtid>
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({ list: state.todo.list });
const mapDispatchToprops = (dispatch) =>
  bindActionCreators({ markAsDone, MarkAsPending, remove }, dispatch);

export default connect(mapStateToProps, mapDispatchToprops)(TodoList);
