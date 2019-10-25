import React from 'react'
import House from "../House/House";
import { Link } from "react-router-dom";

export default class Dashboard extends React.Component {    
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