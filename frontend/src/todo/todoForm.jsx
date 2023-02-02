import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDescription, search, add, clear } from "./todoActions";
import Grid from "../template/grid";
import BtnGrid from "../template/btnGrid";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  componentWillMount() {
    this.props.search();
  }

  keyHandler(evento) {
    const { add, clear, search, description } = this.props;
    if (evento.key === "Enter") {
      evento.shiftKey ? search() : add(description);
    } else if (evento.key === "Escape") {
      clear();
    }
  }
  render() {
    const { add, search, description } = this.props;
    return (
      <div role="form" className="todoForm">
        <Grid cols="12 9 10">
          <input
            id="description"
            className="form-control"
            placeholder="Adicione uma tarefa"
            onChange={this.props.changeDescription}
            onKeyDownCapture={this.keyHandler}
            value={this.props.description}
          />
        </Grid>

        <Grid cols="12 3 2">
          <BtnGrid
            style="primary"
            icon="plus"
            onClick={() => add(description)}
          ></BtnGrid>
          <BtnGrid style="info" icon="search" onClick={search}></BtnGrid>
          <BtnGrid
            style="default"
            icon="close"
            onClick={this.props.clear}
          ></BtnGrid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ description: state.todo.description });
const mapDispatchToprops = (dispatch) =>
  bindActionCreators({ changeDescription, search, add, clear }, dispatch);
export default connect(mapStateToProps, mapDispatchToprops)(TodoForm);
