import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Layout } from "./components/Layout";

import App from "./App";
import { Archives } from "./pages/Archives";
import { Featured } from "./pages/Featured";
import { QueryString } from "./pages/QueryString";
import { StudyState1 } from "./pages/StudyState1";
import { StudyState2 } from "./pages/StudyState2";
import { StudyUseReducer } from "./pages/StudyUseReducer";

const rootElement = document.getElementById("root");

// Routeで":name" と書けばこの値が各Component側で取得ができる。
// exact と書くと完全一致のときだけ開く様になる
// 正規表現チックに可変パス部分を選択型にすることも可能
//
// GETパラメーター(QueryString)を使いたい場合はURLSearchParams()を使って取得。(受け手側のComponentで指定)
ReactDOM.render(
  <StrictMode>
    <Router>
      <Layout>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/archives" component={Archives}></Route>
        <Route path="/archives/:article_id" component={Archives}></Route>
        <Route path="/featured/:mode(main|extra)" component={Featured}></Route>
        <Route path="/querystring/" component={QueryString}></Route>
        <Route extract path="/study_state1/" component={StudyState1}></Route>
        <Route extract path="/study_state2/" component={StudyState2}></Route>
        <Route
          extract
          path="/study_usereducer/"
          component={StudyUseReducer}></Route>
      </Layout>
    </Router>
  </StrictMode>,
  rootElement
);
