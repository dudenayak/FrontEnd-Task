import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SymptomsCard = (props) => {
  return (
    <div className='symptoms-card'>
      <div className='symptoms-card-bottom'>
        <div className='progress-bar'>
          <CircularProgressbar
            value={props.value}
            text={`${props.value}%`}
            styles={buildStyles({
              pathColor: props.color,
              trailColor: '#D6D6D6',
              textColor: '#000',
              textSize: '24px',
            })}
          />
        </div>
        <h6>{props.text}</h6>
      </div>
    </div>
  );
};

export default SymptomsCard;
