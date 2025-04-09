import React from 'react';
import portrait from "../image/aboutMe/portrait.png"; 
import Navbar from '../components/Navbar';

function PlanMyDay({ font = 'Gluten, sans-serif' }) {
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
                    <h1 style={ titleStyle }>Work in progress...Coming soon!</h1>
                   
                </div>

               
            </div>
        </>

    );
}

export default PlanMyDay;
