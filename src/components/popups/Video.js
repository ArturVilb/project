import React from 'react';
import "./Video.css"

function Video(props) {
  return (props.trigger) ? (
    <div className="video">
        <div className="video-inner">
            <button className='close-btn' onClick = {() => props.setTrigger(false)}>Close</button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default Video