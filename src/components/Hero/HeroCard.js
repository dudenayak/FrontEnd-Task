import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const HeroCard = (props) => {
  let path = './images/' + props.img + '.png';
  return (
    <div className='hero-card'>
      <div className='card-top'>
        <img src={path} alt={props.img} />
        <h2>{props.name}</h2>
      </div>
      <div className='card-bottom'>
        <div className='progress-bar'>
          <CircularProgressbar
            value={props.value}
            text={`${props.value}%`}
            styles={buildStyles({
              pathColor: props.color,
              trailColor: '#11111111',
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

export default HeroCard;
