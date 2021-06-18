import React from "react";

export class Archives extends React.Component {
  render() {
    return (
      <>
        <h1>Archives</h1>
        <p>
          {this.props.match.params.article_id
            ? "(" + this.props.match.params.article_id + ")"
            : "Top"}
        </p>
      </>
    );
  }
}
