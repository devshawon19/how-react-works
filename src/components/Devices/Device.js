import React from 'react';
import DeviceDetail from './DeviceDetail';

const Device = (props) => {
    return (
        <div className='App'>
            <h2>I have a {props.name}</h2>
            <p>price: {props.price}</p>
            <DeviceDetail processor="Apple A15" price={props.price}></DeviceDetail>
        </div>
    );
};

export default Device;