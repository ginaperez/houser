import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { setUser } from './redux/reducer';
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Wizard1 from './components/Wizard/Wizard1/Wizard1';
import Wizard2 from './components/Wizard/Wizard2/Wizard2';
import House from "./components/House/House";
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
        <Header title={this.state.title} user={this.props.user} />
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
        </Switch>
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
