import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { setUser } from './redux/reducer';
import Dashboard from "./components/Dashboard/Dashboard";
import Wizard1 from './components/Wizard/Wizard1/Wizard1';
import Wizard2 from './components/Wizard/Wizard2/Wizard2';
import Wizard3 from './components/Wizard/Wizard3/Wizard3';
import Wizard4 from './components/Wizard/Wizard4/Wizard4';
import Wizard5 from './components/Wizard/Wizard5/Wizard5';
import AuthComponent from "./components/Auth/Auth";
// import routes from "./route";
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Login"
    };
    this.changeTitle = this.changeTitle.bind(this);
  }
  
  changeTitle(title) {
    this.setState({
      title: title
    });
  }

  render() {
    return (
      <div className="App">
        <div className="main-container">
          <Switch>
            <Route exact path="/" render={props => (
              <AuthComponent changeTitle={this.changeTitle} {...props} />
            )}
            />
            <Route path="/dashboard" render={props => (
              <Dashboard changeTitle={this.changeTitle} {...props} />
            )}
            />
            <Route path="/wizard/1" render={props => (
              <Wizard1 changeTitle={this.changeTitle} {...props} />
            )}
            />
            <Route path="/wizard/2" render={props => (
              <Wizard2 changeTitle={this.changeTitle} {...props} />
            )}
            />
            <Route path="/wizard/3" render={props => (
              <Wizard3 changeTitle={this.changeTitle} {...props} />
            )}
            />
            <Route path="/wizard/4" render={props => (
              <Wizard4 changeTitle={this.changeTitle} {...props} />
            )}
            />
            <Route path="/wizard/5" render={props => (
              <Wizard5 changeTitle={this.changeTitle} {...props} />
            )}
            />
          </Switch>
        </div>
      </div>
      );
    } 
};

function mapReduxStateToProps(reduxState) {
  return reduxState
};

const mapDispatchToProps = {
  setUser
};

const invokedConnect = connect(mapReduxStateToProps, mapDispatchToProps);

export default invokedConnect(withRouter(App));
