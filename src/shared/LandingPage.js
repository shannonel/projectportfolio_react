import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'
import 'bootstrap-social/bootstrap-social.css'

const projectStyle = {
    color: 'whitesmoke',
    font: 'xx-large',
    backgroundColor: '#9C12C9',
    height:'25vh'
}

const interactStyle = {
    color: 'whitesmoke',
    font: 'xx-large',
    backgroundColor: '#721877',
    height:'25vh'
}

const bioStyle = {
    color: 'whitesmoke',
    font: 'xx-large',
    backgroundColor: '#4814CC',
    height:'25vh'
}

const skillsStyle = {
    color: 'whitesmoke',
    font: 'xx-large',
    backgroundColor: '#6919B3',
    height:'25vh'
}

function ProjectBox() {
    return (
        <div style={projectStyle}>top left quadrant is projects</div>
    );
}

function InteractBox() {
    return (
        <div style={interactStyle}>bottom left quadrant is interact</div>
    );
}

function BioBox() {
    return (
        <div style={bioStyle}>bottom right quadrant is bio</div>
    );
}

function SkillsBox() {
    return (
        <div style={skillsStyle}>top right quadrant is skills</div>
    );
}

class LandingPage extends Component {
    constructor(props){
        super(props);
    }

    render () {
        return (
            <div>
                <div>logo goes here</div>
                <ProjectBox className="projectBox" />
                <SkillsBox className="skillsBox" />
                <InteractBox className="interactBox" />
                <BioBox className="bioBox" />
            </div>
        );
    }
}

export default LandingPage;