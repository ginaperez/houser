import { Route, Switch } from 'react-router-dom';
import Dashboard from "./components/Dashboard/Dashboard";
import Wizard from "./components/Wizard/Wizard";

function Switch() {
    return (
        <Switch>
            <Route path='/' component={Dashboard} />
            <Route path='/wizard' component={Wizard} />
        </Switch>
    )
}

export default Switch;