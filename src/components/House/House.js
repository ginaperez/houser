import React from 'react'

export default class House extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        return (
            <div>
                <div>House: {this.props.house}</div>
                {/* <button>Delete</button> */}
            </div>
        )
    }
}