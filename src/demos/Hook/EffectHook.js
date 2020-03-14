import React, { useState, useEffect } from "react";

export default function Example() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const myRef = React.createRef();
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // 数据获取，设置订阅，以及手动更改React 组件里面的 DOM 都属于副作用
    // 可以将 useEffect 看作是 componentDidMount , componentDidUdate, ComponentWillUnmount三个函数的组合
    // useEffect会在 `每次渲染` 和`每次更新之后` 都执行
    console.log("重新渲染");
    document.title = `You clicked ${count + count2} times`;
    myRef.current.innerText = `useEffect触发的DOM更新 ${count}`;
    return () => {
      console.log("清除事件绑定");
    };
  });

  return (
    <div>
      <div>
        <p>You clicked count: {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>

      <div>
        <p>You clicked count2: {count2} times</p>
        <b>
          这里文档说，可以通过给useEffect传递参数2，如果某些特定值在两次重渲染之间没有发生变化，你可以通知
          React 跳过对 effect
          的调用，但是我发现，如果两次的值没有变化，即使不传递参数2，也不会重新调用useEffect
        </b>
        <button onClick={() => setCount2(count2 + 1)}>测试useEffect 参数2</button>
      </div>
      <p ref={myRef}></p>
    </div>
  );
}
