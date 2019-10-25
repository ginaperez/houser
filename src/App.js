import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import House from "./components/House/House";
import Wizard from "./components/Wizard/Wizard";

class App extends React.Component {
  render() {

  return (
    <HashRouter>
    <div className="App">
      <Header />
      <House />
    </div>
    </HashRouter>
  )
}
};

export default App;
