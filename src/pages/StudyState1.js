import React from "react";

// props = あとから変更はできない
// state = あとから変更できる(状態)

// Class Componentでstateを利用した場合
//   - constructor()で初期値設定
//   - 値の変更に関するFunctionを定義
//   - JSXの中でonClickなどを用いてアクションと紐付ける
export class StudyState1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  counter = (val) => {
    this.setState({ count: this.state.count + val });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        <h2>StudyState1</h2>
        <button onClick={() => this.counter(1)}>+1</button>
        <button onClick={() => this.counter(-1)}>-1</button>
        <button onClick={() => this.reset()}>reset</button>
        <p>state.count : {this.state.count}</p>
      </>
    );
  }
}
