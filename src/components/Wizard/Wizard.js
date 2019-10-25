import React from 'react';
import Link from 'react-router-dom';

export default class Wizard extends React.Component {
    render() {
        return (
            <div>
                <Link to='/'>
                    <button className="add-new">Cancel</button>
                </Link>
            </div>
        )
    }
}