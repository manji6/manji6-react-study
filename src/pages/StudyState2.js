import React, { useState, useEffect } from "react";

// props = あとから変更はできない
// state = あとから変更できる(状態)

//関数コンポーネントで書いた場合
const StudyState2 = () => {
  //useStateの基本形
  const initialState = {
    count: 0
  };
  // [状態変数,状態を変更するための巻数] = useState(初期値)
  const [count, counter] = useState(initialState["count"]);

  // useEffect
  // 渡された関数はRender反映後に実行される様になる
  // 第1引数: 実行したい関数・処理を記述
  // 第2引数: 第1引数で書いた関数が動作するかの条件判定してもらう変数を配列で記載(省略可能)
  //   - 空配列を指定すると初回レンダリング時のみ
  useEffect(() => {
    console.log("useEffect(副作用関数が実行されました)");
  }, [count]);

  useEffect(() => {
    console.log("初回レンダリング時のみだけ実行");
  }, []);

  return (
    <>
      <h2>StudyState2</h2>
      <button onClick={() => counter((prevState) => prevState + 1)}>+1</button>
      <button onClick={() => counter((prevState) => prevState - 1)}>-1</button>
      <button onClick={() => counter(count - 1)}>-1(another version)</button>
      <button onClick={() => counter(initialState["count"])}>reset</button>
      <p>state.count : {count}</p>
    </>
  );
};

export { StudyState2 };
