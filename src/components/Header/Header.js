import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser, logOutUser } from '../../redux/reducer';
import logo from '../../images/header_logo.png';
import axios from 'axios';
import './Header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
    }

    toggler() {
        this.setState(prevState => {
            return {
                toggle: !prevState.toggle
            };
        });
    }

    logOut() {
        axios.delete('/api/logout').then(res => {
            this.props.logOutUser();
        });
    }

    render() {
        return (
            <header className='header'>
                <div className='divider'>
                    <div className='head'>
                        <div className='logo-container'>
                            <img className='auth-logo' src={logo} alt='logo'></img>
                            <h1 className='houser-text'>Houser</h1>
                            <h1 className='dashboard-text'>Dashboard</h1>
                        </div>
                        {!this.props.user ? (
                            <nav className={this.state.toggle ? 'show' : ''}>
                                <NavLink className='navlink' to='/'>Login</NavLink>
                            </nav>
                        ) : (
                            <nav className={this.state.toggle ? 'show' : ''}>
                                <NavLink className='navlink' onClick={() => this.logout()} to='/logout'>Logout</NavLink>
                            </nav>
                        )}
                    </div>
                </div>
            </header>
        );
    }
}

function mapReduxStateToProps(reduxState) {
    return reduxState;
}

const mapDispatchToProps = {
    setUser,
    logOutUser
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(Header);