import React from 'react';
import { Button } from '../Button/Button';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-wrapper'>
        <div className='banner-left'>
          <h2>
            95%+ Hypothyroidism is caused by one of the 3 underlying factors
          </h2>
          <div className='banner-content'>
            <ol>
              <li>Hashimoto’s</li>
              <li>HPA Axis Dysfunction</li>
              <li>Estrogen Excess</li>
            </ol>
          </div>
          <div className='banner-content-down'>
            <h4>
              These root causes are treatable. Book a thyroid root cause panel
              to find your clinical root cause and begin personalised treatment.
            </h4>
          </div>
          <div className='banner-button'>
            <div className='banner-button1'>
              <Button buttonSize='btn-orange--medium'>
                Consult Health Coach
              </Button>
            </div>
            <div className='banner-button2'>
              <Button buttonSize='btn-purple--medium'>
                Book Root Cause Panel
              </Button>
            </div>
          </div>
        </div>
        <div className='banner-right'>
          <img src='./images/thyroidpic.png' alt='Typhoid' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
