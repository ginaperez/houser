import React from 'react';
import WizardMain from '../WizardMain';
import Header from '../../Header/Header';
import StepActive from '../../../images/step_active.png';
import StepInactive from '../../../images/step_inactive.png';
import './Wizard1.scss';

export default class Wizard1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            propertyName: "",
            propertyDescription: "",
        }
    }

    universalInput(property, value) {
        this.setState({
            [property]: value
        });
    }

    render() {
        const { propertyName, propertyDescription } = this.state;
        return (
            <div className="wizard-container">
                <Header title={this.state.title} user={this.props.user} />
                <WizardMain />
                <h1 className='step-1'>Step 1</h1>
                <div className="dot-container">
                    <img src={StepActive} alt='Active Step'></img>
                    <img src={StepInactive} alt='Inactive Step'></img>
                    <img src={StepInactive} alt='Inactive Step'></img>
                    <img src={StepInactive} alt='Inactive Step'></img>
                    <img src={StepInactive} alt='Inactive Step'></img>
                </div>
                <form className="wizard" onSubmit={e => {
                    e.preventDefault();
                    this.props.submitForm({
                        propertyName,
                        propertyDescription
                    });
                    this.setState({
                        propertyName: "",
                        propertyDescription: "",
                    });
                }}>
                        <label className="label">Property Name</label>
                        <input value={propertyName} className="input" onChange={(e) => this.universalInput("propertyName", e.target.value)} />
                        <label className="label">Property Description</label>
                        <input value={propertyDescription} className="desc-input" onChange={(e) => this.universalInput("propertyDescription", e.target.value)} />
                        <button className='next-step'>Next Step</button>
                </form>
            </div>
        )
    }
}