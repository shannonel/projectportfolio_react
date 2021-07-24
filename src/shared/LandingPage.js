import React, { Component } from 'react';

class LandingPage extends Component {
    constructor(props){
        super(props);
    }

    render () {
        return (
            <div>
                <div>logo goes here</div>
                <div>top left quadrant is projects</div>
                <div>top right quadrant is skills</div>
                <div>bottom left quadrant is interact</div>
                <div>bottom right quadrant is bio</div>
            </div>
        );
    }
}

export default LandingPage;