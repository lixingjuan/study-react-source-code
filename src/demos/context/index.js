import React, { Component } from "react";

const { Provider, Consumer } = React.createContext("default");

/* 或者这种写法 */
// import { createContext } from "react";
// const BatteryContext = createContext();
// 使用时候 <BatteryContext.provider>
// 使用时候 <BatteryContext.Consumer>
//声明一个孙组件
class Leaf extends Component {
  render() {
    return (
      <Consumer>
        {/* 在子组件或者孙组件，在 <Consumer> 使用函数接收 */}
        {({ a, b }) => (
          <>
            <h3>a :{a}</h3>
            <h3>b :{b}</h3>
          </>
        )}
      </Consumer>
    );
  }
}

//声明一个子组件
class Middle extends Component {
  render() {
    console.log(this);
    return (
      <>
        <Consumer>
          {({ a, b }) => (
            <>
              <h3>a+Middle :{a}</h3>
              <h3>b+Middle :{b}</h3>
            </>
          )}
        </Consumer>
        <Leaf />
      </>
    );
  }
}

class App extends Component {
  state = {
    battery: 60
  };
  render() {
    const { battery } = this.state;
    return (
      // 在父组件，通过Provider 的value 传递
      <Provider
        value={{
          a: 111,
          b: 222
        }}
      >
        <button type="button" onClick={() => this.setState({ battery: battery - 1 })}>
          减减
        </button>
        <Middle />
      </Provider>
    );
  }
}

export default App;
