import React, { Component } from 'react';
import axios from 'axios';
import './Auth.scss';
import Redirect from 'react-router-dom';

class AuthComponent extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            username: '',
            email: '',
            password: '',
            register: false,
            failed: false
        };
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
    }

    async register() {
        const { username, email, password } = this.state;
        try {
            const registeredUser = await axios.post(`/api/auth/register`, { username, email, password });
            console.log(registeredUser.data)
            this.props.setUser(registeredUser.data);
        } catch (error) {
            this.setState({
                failed: true
            })
        }
    }
    
    async login() {
        const { email, password } = this.state;
        try {
            const loggedInUser = await axios.post(`/api/auth/login`, { email, password });
            this.props.setUser(loggedInUser.data)
        } catch (error) {
            this.setState({
                failed: true
            })
        }
    }
    
    render() {
        const { username, email, password, register, failed } = this.state;
        let errorMessage;
        if(failed && register) {
            errorMessage = <p className='error'>User already exists! Please log in.</p>
        } else if(failed && !register) {
            errorMessage = <p className='error'>Incorrect email or password.</p>
        } else {
            errorMessage = <p className='error'></p>
        }
        return this.props.user ? 
            (<Redirect to='/api/properties' />)
            : (<div className='auth-container'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if(register) {
                        this.register()
                    } else {
                        this.login();
                    }
                }}>
                    {errorMessage}
                    <div className='inputs'>
                        {register && (
                            <div className='username'>
                                <label>Username</label>
                                <input type='username' value={username} onChange={(e) => this.setState({
                                    username: e.target.value
                                })} />
                            </div>
                        )}
                        <div className='email'>
                            <label>Email</label>
                            <input type='email' value={email} onChange={(e) => this.setState({
                                email: e.target.value
                            })} />
                        </div>
                        <div className='password'>
                            <label>Password</label>
                            <input type='password' value={password} onChange={(e) => this.setState({
                                password: e.target.value
                            })}/>
                        </div>
                        <button className='submit'>Submit</button>
                    </div>
                    {!register && <button className='switcher' onClick={() => {this.setState({register: true, failed: false}); this.props.changeTitle('Register')}}>Register</button>}
                    {register && <button className='switcher' onClick={() => {this.setState({register: false, failed: false}); this.props.changeTitle('Login')}}>Login</button>}
                </form>
            </div>
        )
    }
}

function mapReduxStateToProps(reduxState) {
    return reduxState;
};

const mapDispatchStateToProps = {
    setUser
};

const enhancedComponent = connect(
    mapReduxStateToProps,
    mapDispatchStateToProps
);

export default enhancedComponent(AuthComponent)