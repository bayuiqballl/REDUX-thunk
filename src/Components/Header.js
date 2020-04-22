import React from "react";
import { withRouter } from "react-router-dom";

import "../App.css";

const Header = (props) => {
  return (
    <div className="App">
      <div className="nav">
        <ul>
          <li>
            <a>
              <button
                onClick={() => {
                  props.history.push("/");
                }}
              >
                Home
              </button>
            </a>
          </li>
          {"   "}{" "}
          <li>
            <a>
              {" "}
              <button
                onClick={() => {
                  props.history.push("/MockAPI");
                }}
              >
                Mock
              </button>{" "}
            </a>
          </li>
          <li>
            <a>
              {" "}
              <button
                onClick={() => {
                  props.history.push("/Hooks");
                }}
              >
                Hooks
              </button>{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withRouter(Header);
