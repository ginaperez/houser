import React from 'react';
import axios from 'axios';
import './WizardMain.scss';

class WizardMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='container'>
                <h1 className='new-listing-header'>Add new listing</h1>
                <button className='cancel'>Cancel</button>
            </div>
        )
    }
};

export default WizardMain;