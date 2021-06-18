import React from "react";
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/archives">Archives</Link>
        </li>
        <li>
          <Link to="/featured/main">Featured(Main)</Link>
        </li>
        <li>
          <Link to="/featured/extra">Featured(Extra)</Link>
        </li>
        <li>
          <Link to="/querystring/?param=1">QueryString</Link>
        </li>
        <li>
          <Link to="/study_state1">StudyState1</Link>
        </li>
        <li>
          <Link to="/study_state2">StudyState2</Link>
        </li>
        <li>
          <Link to="/study_usereducer">StudyUseReducer</Link>
        </li>
      </ul>
    );
  }
}
