import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import './Watch.css'
const Watch = () => {
    const [step, setStep] = useState(0)

    const increaseSteps = () => {
            setStep(step+1);
            // console.log(step);
        }

    useEffect( ()  => {
        console.log(step);
    }, [step])
    return (
        <div className='watch'>
           <h3>This is my smart watch</h3> 
           <h4>My Current Steps: {step}</h4>
           <button onClick={increaseSteps}>Run!</button>
           <Display  name="garmin" steps={step}></Display>
        </div>
    );
};

export default Watch;<h3>This is my smart watch</h3>