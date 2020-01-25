import React from 'react';
import WizardMain from '../WizardMain';
import Header from '../../Header/Header';
import StepActive from '../../../images/step_active.png';
import StepCompleted from '../../../images/step_completed.png';

class Wizard5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desiredRent: 0
        }
    }

    universalInput(property, value) {
        this.setState({
            [property]: value
        });
    }

    render() {
        const { desiredRent } = this.state;
        return (
            <div className="wizard-container">
                <Header title={this.state.title} user={this.props.user} />
                <WizardMain />
                <h1 className='step-5'>Step 5</h1>
                <div className="dot-container">
                    <img src={StepCompleted} alt='Step Completed'></img>
                    <img src={StepCompleted} alt='Step Completed'></img>
                    <img src={StepCompleted} alt='Step Completed'></img>
                    <img src={StepCompleted} alt='Step Completed'></img>
                    <img src={StepActive} alt='Active Step'></img>
                </div>
                <form className="wizard" onSubmit={e => {
                    e.preventDefault();
                    this.props.submitForm({
                        desiredRent
                    });
                    this.setState({
                        desiredRent: 0
                    });
                }}>
                    <label className="label">Desired Rent</label>
                    <input value={desiredRent} className="input" onChange={(e) => this.universalInput("desiredRent", e.target.value)} />
                </form>
            </div>
        )
    }
}

export default Wizard5;