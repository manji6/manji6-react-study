import React from "react";

import { Header } from "./Header";

export class Layout extends React.Component {
  render() {
    console.log("render: Layout component");

    return (
      <>
        <h1>Title</h1>
        <Header></Header>
        {this.props.children}
      </>
    );
  }
}
