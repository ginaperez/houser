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
        Axios.get("http://localhost:3000/allhouses").then(response => {
            this.setState({
                allHouses: response.data
            });
        });
    }

    deleteHouse(house) {
        Axios.delete(`http://localhost:3000/allhouses/${house.name}`)
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
                <Link to='/wizard'>
                    <button className="add-new">Add New Property</button>
                </Link>
            </div>
        )
    }
}