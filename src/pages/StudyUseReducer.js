import React, { useReducer } from "react";

// props = あとから変更はできない
// state = あとから変更できる(状態)

// 状態管理のためのフックで、useStateと似たような機能。
// useStateはuseReducerに内部実装されています。

// useStateだと数値文字列、論理値を扱えるが、
// useReducerだとObjectの監視もできる
//

//関数コンポーネント
const StudyUseReducer = () => {
  const initialState = {
    firstCounter: 0,
    secondCounter: 0
  };

  const reducerFunc = (countState, action) => {
    switch (action.type) {
      case "incrementAll":
        return {
          ...countState,
          firstCounter: countState.firstCounter + 1,
          secondCounter: countState.secondCounter + 1
        };
      case "decrementAll":
        return {
          ...countState,
          firstCounter: countState.firstCounter - 1,
          secondCounter: countState.secondCounter - 1
        };
      case "reset":
        if (action.value) {
          return {
            ...countState,
            firstCounter: action.value,
            secondCounter: action.value
          };
        } else {
          return {
            ...countState,
            firstCounter: initialState.firstCounter,
            secondCounter: initialState.secondCounter
          };
        }
      default:
        return countState;
    }
  };

  // state = 監視する値
  // dispatch = reducerFuncを呼び出すための関数
  // reducerFunc = 監視値を変更する関数
  // initialState = 初期値
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  return (
    <>
      <h2>
        カウント：{state.firstCounter}, {state.firstCounter}
      </h2>
      <button onClick={() => dispatch({ type: "incrementAll", value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrementAll", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "reset", value: 100 })}>
        reset
      </button>
    </>
  );
};

export { StudyUseReducer };
