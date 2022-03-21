import React from 'react';

const DeviceDetail = (props) => {
    return (
        <div>
            <p>processor: {props.processor}</p>
            <p>price: {props.price}</p>
        </div>
    );
};

export default DeviceDetail; 