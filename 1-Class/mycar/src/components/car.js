import React from 'react';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {engineRunning: false};

        // this is necessary to make this work in callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            engineRunning: !prevState.engineRunning
        }));
    }

    render() {
        return (
            <div>
            <h2>Hi, I'm a {this.props.brand}</h2>
            <p>My engine is {this.state.engineRunning ? "running" : "stopped"}.</p>
            <button onClick={this.handleClick}>
                {this.state.engineRunning ? "STOP" : "START"}
            </button>
        </div>
        );
    }

    
}

export default Car;