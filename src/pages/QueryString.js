import React from "react";

export class QueryString extends React.Component {
  render() {
    // QueryStringの値を取得
    const query = new URLSearchParams(this.props.location.search);

    return (
      <>
        <p>QueryString</p>
        <p>parameter: query = {query.get("param")}</p>
      </>
    );
  }
}
