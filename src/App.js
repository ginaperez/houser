import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Header from "./components/Header/Header";
import House from "./components/House/House";
import routes from "./route"

class App extends React.Component {
  render() {

  return (
    <HashRouter>
    <div className="App">
      <Header />
      <House />
      {routes}
    </div>
    </HashRouter>
  )
}
};

export default App;
