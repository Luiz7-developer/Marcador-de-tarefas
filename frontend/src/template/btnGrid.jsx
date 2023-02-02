import React from "react";
import If from "../template/if";

export default (props) => (
  // se o teste não tiver escondido altomaticamente mostra essa função
  // se estiver escodido ele simplesmente pula essa renderização
  <If test={!props.hide}>
    <button className={"btn btn-" + props.style} onClick={props.onClick}>
      <i className={"fa fa-" + props.icon}></i>
    </button>
  </If>
);
