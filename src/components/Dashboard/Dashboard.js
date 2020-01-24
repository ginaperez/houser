import React from 'react'
import House from "../House/House";
import { Link } from "react-router-dom";
import Axios from 'axios';

export default class Dashboard extends React.Component {    
    constructor(props) {
        super(props)
        this.state = {
            allHouses: []
        }
        this.displayHouses = this.displayHouses.bind(this);
    } 

    componentDidMount() {
        this.displayHouses();
    }

    displayHouses() {
        Axios.get(`/api/properties`).then(response => {
            this.setState({
                allHouses: response.data
            });
        });
    }

    addHouse() {
        Axios.post(`api/properties`).then(response => {
            this.setState({
                allHouses: response.data
            });
            this.props.displayHouses(this.props)
        }).catch(err => console.log(err))
    }

    deleteHouse(id) {
        Axios.delete(`/api/properties/${id}`)
        .then(response => {
            this.setState({
                allHouses: response.data
            });
        })
        .catch(err => console.log(err));
    }
    
    render() {
        return (
            <div>
                <House />
                <Link to='/wizard/1'>
                    <button className="add-new">Add New Property</button>
                </Link>
            </div>
        )
    }
}