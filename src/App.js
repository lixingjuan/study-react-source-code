import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch /* Redirect */ } from "react-router-dom";

import "./App.css";
import "~antd/dist/antd.css";
import Head from "./components/Head";
import Context from "./demos/context/index";
import Suspense from "./demos/suspense/index";
import StateHook from "./demos/Hook/StateHook";
import EffectHook from "./demos/Hook/EffectHook";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Head>去主页</Head>
        <Switch>
          <Route path="/demos/context" exact component={Context} />
          <Route path="/demos/suspense" exact component={Suspense} />
          <Route path="/demos/hook/stateHook" exact component={StateHook} />
          <Route path="/demos/hook/effectHook" exact component={EffectHook} />
        </Switch>
      </Router>
    );
  }
}
