import React, { useState } from "react";

function Example() {
  // 声明一个叫 "count" 的 state 变量
  console.log(useState);
  /* 打印一下useState */
  /* ƒ useState(initialState) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useState(initialState);
    } */
  const [count, setCount] = useState(0);
  // 名字对应即可
  const [gua, setGua] = useState(5);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked {gua} times</p>
      <button onClick={() => setGua(gua + 1)}>Click me</button>
    </div>
  );
}

export default Example;
