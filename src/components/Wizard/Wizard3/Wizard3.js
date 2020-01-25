import React from 'react';
import Header from '../../Header/Header';
import StepActive from '../../../images/step_active.png';
import StepInactive from '../../../images/step_inactive.png';
import StepCompleted from '../../../images/step_completed.png';
import WizardMain from '../WizardMain';
import './Wizard3.scss';

class Wizard3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: ""
        }
    }

    universalInput(property, value) {
        this.setState({
            [property]: value
        });
    }

    render() {
        const { image } = this.state;
        return (
            <div className="wizard-container">
                <Header title={this.state.title} user={this.props.user} />
                <WizardMain />
                <h1 className='step-3'>Step 3</h1>
                <div className="dot-container">
                    <img src={StepCompleted} alt='Step Completed'></img>
                    <img src={StepCompleted} alt='Step Completed'></img>
                    <img src={StepActive} alt='Active Step'></img>
                    <img src={StepInactive} alt='Inactive Step'></img>
                    <img src={StepInactive} alt='Inactive Step'></img>
                </div>
                <form className="wizard" onSubmit={e => {
                    e.preventDefault();
                    this.props.submitForm({
                        image
                    });
                    this.setState({
                        image: ""
                    });
                }}>
                    <label className="label">Image URL</label>
                    <input value={image} className="input" onChange={(e) => this.universalInput("image", e.target.value)} />
                </form>
            </div>
        )
    }
};

export default Wizard3;