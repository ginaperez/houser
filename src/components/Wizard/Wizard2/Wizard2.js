import React from 'react';
import Header from '../../Header/Header';
import StepActive from '../../../images/step_active.png';
import StepInactive from '../../../images/step_inactive.png';
import StepCompleted from '../../../images/step_completed.png';
import WizardMain from '../WizardMain';
import './Wizard2.scss';

class Wizard2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            city: "",
            state: "",
            zip: 0
        }
    }

    universalInput(property, value) {
        this.setState({
            [property]: value
        });
    }

    render() {
        const { address, city, state, zip } = this.state;
        return (
            <div className="wizard-container">
                <Header title={this.state.title} user={this.props.user} />
                <WizardMain />
                <h1 className='step-2'>Step 2</h1>
                <div className="dot-container">
                    <img src={StepCompleted} alt='Step Completed'></img>
                    <img src={StepActive} alt='Active Step'></img>
                    <img src={StepInactive} alt='Inactive Step'></img>
                    <img src={StepInactive} alt='Inactive Step'></img>
                    <img src={StepInactive} alt='Inactive Step'></img>
                </div>
                <form className="wizard" onSubmit={e => {
                    e.preventDefault();
                    this.props.submitForm({
                        address,
                        city,
                        state,
                        zip
                    });
                    this.setState({
                        address: "",
                        city: "",
                        state: "",
                        zip: 0
                    });
                }}>
                        <label className="label">Address:</label>
                        <input value={address} className="input" onChange={(e) => this.universalInput("address", e.target.value)} />
                        <label className="label">City:</label>
                        <input value={city} className="input" onChange={(e) => this.universalInput("city", e.target.value)} />
                        <label className="label">State</label>
                        <input value={state} className="input" onChange={(e) => this.universalInput("state", e.target.value)} />
                        <label className="label">Zip:</label>
                        <input value={zip} className="input" onChange={(e) => this.universalInput("zip", e.target.value)} />
                        <button className='next-step'>Next Step</button>
                </form>
            </div>
        )
    }
};

export default Wizard2;