import React from 'react'
import Header from '../Header/Header';
import { Link } from "react-router-dom";
import Axios from 'axios';
import './Dashboard.scss';

export default class Dashboard extends React.Component {    
    constructor(props) {
        super(props)
        this.state = {
            allHouses: []
        }
        this.displayHouses = this.displayHouses.bind(this);
        this.addHouse = this.addHouse.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
        this.filterHouses = this.filterHouses.bind(this);
    } 

    componentDidMount() {
        this.displayHouses();
    };

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
    };

    deleteHouse(id) {
        Axios.delete(`/api/properties/${id}`)
        .then(response => {
            this.setState({
                allHouses: response.data
            });
        })
        .catch(err => console.log(err));
    };

    async filterHouses() {
        const { searchQuery } = this.state;
        const searchResponse = await Axios.get(`/api/search?query=${searchQuery}`);

        this.setState({allHouses: searchResponse.data})
    };
    
    render() {
        const { searchQuery } = this.state;
        return (
            <div className='main-container'>
                <Header title={this.state.title} user={this.props.user} />
                <Link to='/wizard/1'>
                    <button className="add-new">Add New Property</button>
                </Link>
                <div className='search'>
                    <form onSubmit={e => { e.preventDefault(); this.filterHouses(); }}>
                        <input className="search-input-box" value={searchQuery} placeholder="0" onChange={(e) => { this.setState({ searchQuery: e.target.value}); }} />
                        <button className="search-button">Filter</button>
                    </form>
                </div>
            </div>
        )
    }
}