import React from 'react';
import './Timer.css';

// Random component
const Completionist = () => <span>Event Finished!</span>;

// Renderer callback with condition
export const renderer = ({ days,hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
        <div className='clock-style  mt-5 '>
            <h3 className='mb-0 text-start ms-3'>50% Discount Till</h3>
            <div className='d-flex justify-content-between align-items-start'>
            
            <div>
                <h1 className='time-style'>{days}</h1>
                <p><small>Days</small></p>
            </div>
            <div className=''>
                <div className='watch-dot-1'></div>
                <div className='watch-dot-2'></div>
            </div>
            <div>
                <h1 className='time-style'>{hours}</h1>
                <p><small>Hours</small></p>
            </div>
            <div className=''>
                <div className='watch-dot-1'></div>
                <div className='watch-dot-2'></div>
            </div>
            <div>
                <h1 className='time-style'>{minutes}</h1>
                <p><small>Minutes</small></p>
            </div>
            <div className=''>
                <div className='watch-dot-1'></div>
                <div className='watch-dot-2'></div>
            </div>
            <div>
                <h1 className='time-style'>{seconds}</h1>
                <p><small>Seconds</small></p>
            </div>
        </div>
        </div>
        
    );
  }
};