import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{border: '2px dashed salmon', margin: '20px', padding: '10px'}}>

            <h2>name hocche: {props.name}</h2>
            <p>my today's steps: {props.steps}</p>
            <Dial steps={props.steps}></Dial>
        </div>
    );
};

export default Display;