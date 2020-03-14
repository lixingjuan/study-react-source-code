import React, { Component } from "react";

export default class Head extends Component {
  state = {};

  render() {
    return (
      <div>
        <p>
          <a href="/demos/context">去context例子</a>
        </p>
        <p>
          <a href="/demos/suspense">去suspense例子</a>
        </p>
        <p>
          <a href="/demos/hook/stateHook">去stateHook例子</a>
        </p>
        <p>
          <a href="/demos/hook/effectHook">去effectHook例子</a>
        </p>
      </div>
    );
  }
}
