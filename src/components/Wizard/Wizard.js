import React from 'react';
import { Link } from 'react-router-dom';

export default class Wizard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zipcode: 0
        }
    }

    universalInput(property, value) {
        this.setState({
            [property]: value
        });
    }

    render() {
        const {
            name,
            address,
            city,
            state,
            zipcode
        } = this.state;
        return (
            <form className="wizard" onSubmit={e => {
                e.preventDefault();
                this.props.submitForm({
                    name,
                    address,
                    city,
                    state,
                    zipcode
                });
                this.setState({
                    name: "",
                    address: "",
                    city: "",
                    state: "",
                    zipcode: 0
                });
            }}>
                <label>Name:</label>
                <input value={name} onChange={(e) => this.universalInput("name", e.target.value)} />
                <label>Address:</label>
                <input value={address} onChange={(e) => this.universalInput("address", e.target.value)} />
                <label>City:</label>
                <input value={city} onChange={(e) => this.universalInput("city", e.target.value)} />
                <label>State:</label>
                <input value={state} onChange={(e) => this.universalInput("state", e.target.value)} />
                <label>ZIP Code:</label>
                <input value={zipcode} onChange={(e) => this.universalInput("zipcode", e.target.value)} />
                <Link to='/'>
                    <button className="add-new">Cancel</button>
                </Link>
                </form>
            
        )
    }
}