import React from 'react';
import portrait from "../image/aboutMe/portrait.png"; // Image import
import Navbar from '../components/Navbar';

function AboutMePage({ font = 'Gluten, sans-serif' }) {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5vw 20vw',
        minHeight: '100vh',
    };

    const textContainerStyle = {
        flex: 1,
        padding: '20px',
        maxWidth: '50%',
        alignItems: 'left',
        justifyContent: 'left',
        textAlign: 'left',
        
    };

    const imageContainerStyle = {
        flex: 1,
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
    };

    const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '30px',
    };

    const titleStyle = {
        fontFamily:'Gluten, sans-serif',
        fontSize: '32px',
        color: "var(--medpurple-color)"
    };

    const textStyle = {
        fontFamily: "Arial",
        fontSize: '18px',
        color: 'var(--darkgreen-color)',
    };

    return (
        <>
            <Navbar></Navbar>
            <div style={ containerStyle }>
                {/* Text on the left */ }
                <div style={ textContainerStyle }>
                    <h1 style={ titleStyle }>About Me</h1>
                    <p style={ textStyle }>
                        Hey, I'm Evey! I'm a data enthusiast and a problem solver at heart. I’m passionate about harnessing the power of data to uncover insights and create meaningful solutions. With a keen focus on building accessible, user-friendly experiences, I aim to ensure that technology is not only powerful but also inclusive and easy to navigate for everyone.
                    </p>
                    <p style={ textStyle }>
                        Let's build something!
                    </p>
                    {/* BACKGROUND*/ }

                    <h1 style={ titleStyle }>Background</h1>
                    <p style={ textStyle }>
                        Originally from Colorado, I lived overseas for most of my childhood in Singapore! I studied Computer Science and Business administration at the University of Southern California (USC) and graduated in May of 2024.
                    </p>

                    {/* Others*/ }

                    <h1 style={ titleStyle }>Outside of Work</h1>
                    <p style={ textStyle }>
                        I love the outdoors! I find solitude in climbing and I'm currently training for a Half Marathon in Brooklyn and hoping to hit sub-2 hours. I'm also a classical music enthusiast and an avid reader. 
                    </p>
        
                </div>

                {/* Image on the right */ }
                <div style={ imageContainerStyle }>
                    <img src={ portrait } alt="Portrait" style={ imageStyle } />
                </div>
            </div>
        </>

    );
}

export default AboutMePage;
