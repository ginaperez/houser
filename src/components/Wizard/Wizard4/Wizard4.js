import React from 'react';
import WizardMain from '../WizardMain';
import Header from '../../Header/Header';
import StepActive from '../../../images/step_active.png';
import StepInactive from '../../../images/step_inactive.png';
import StepCompleted from '../../../images/step_completed.png';
import './Wizard4.scss';

class Wizard4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loanAmount: "",
            mortgage:""
        }
    }

    universalInput(property, value) {
        this.setState({
            [property]: value
        });
    }

    render() {
        const { loanAmount, mortgage } = this.state;
        return (
            <div className="wizard-container">
                <Header title={this.state.title} user={this.props.user} />
                <WizardMain />
                <h1 className='step-4'>Step 4</h1>
                <div className="dot-container">
                    <img src={StepCompleted} alt='Step Completed'></img>
                    <img src={StepCompleted} alt='Step Completed'></img>
                    <img src={StepCompleted} alt='Step Completed'></img>
                    <img src={StepActive} alt='Active Step'></img>
                    <img src={StepInactive} alt='Inactive Step'></img>
                </div>
                <form className="wizard" onSubmit={e => {
                    e.preventDefault();
                    this.props.submitForm({
                        loanAmount,
                        mortgage
                    });
                    this.setState({
                        loanAmount: "",
                        mortgage: ""
                    });
                }}>
                    <label className="label">Loan Amount</label>
                    <input value={loanAmount} className="input" onChange={(e) => this.universalInput("loanAmount", e.target.value)} />
                    <label className="label">Monthly Mortgage</label>
                    <input value={mortgage} className="input" onChange={(e) => this.universalInput("mortgage", e.target.value)} />
                </form>
            </div>
        )
    }
}

export default Wizard4;