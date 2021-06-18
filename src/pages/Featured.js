import React from "react";

export class Featured extends React.Component {
  render() {
    return (
      <>
        <h1 className="hogehoge">Featured</h1>
        {this.props.match.params.mode}
      </>
    );
  }
}
