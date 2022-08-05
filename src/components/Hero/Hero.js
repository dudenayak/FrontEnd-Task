import React from 'react';
import './Hero.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import HeroCard from './HeroCard.js';
import { Button } from '../Button/Button';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-wrapper'>
        <div className='hero-top'>
          <div className='left'>
            <h2>Your Thyroid Severity is</h2>
            <div className='subleft'>
              <div className='progress-bar'>
                <CircularProgressbar
                  value='70'
                  text={`${70}%`}
                  styles={buildStyles({
                    pathColor: `#fff`,
                    textColor: '#fff',
                    trailColor: '#ffffff22',
                    textSize: '27px',
                  })}
                />
              </div>
              <div className='hero-attention'>
                <img src='./images/error.png' alt='' />
                <h3>Your Thyroid Health needs attention </h3>
              </div>
            </div>
          </div>

          <div className='right'>
            <div className='top-section'>
              <div className='name'>
                <h3>Name</h3>
                <h2>Mehak Malik</h2>
              </div>
              <div className='diagonosed'>Diagnosed: 3 years ago</div>
              <div className='talk'>
                <Button buttonStyle='btn--medium'>
                  Talk to Health Coach &nbsp;
                  <img src='./images/rightarrow.png' alt='' />
                </Button>
              </div>
            </div>

            <div className='middle-section'>
              <div className='middle-section-item'>
                <img src='./images/age.png' alt='' />
                <div className='middle-section-text'>
                  <h1>Age</h1>
                  <h2>29 Years</h2>
                </div>
              </div>
              <div className='middle-section-item'>
                <img src='./images/height.png' alt='' />
                <div className='middle-section-text'>
                  <h1>Height</h1>
                  <h2>169 cms</h2>
                </div>
              </div>
              <div className='middle-section-item'>
                <img src='./images/weight.png' alt='' />
                <div className='middle-section-text'>
                  <h1>Weight</h1>
                  <h2>50 Kgs</h2>
                </div>
              </div>
            </div>
            <div className='bottom-section'>
              <h2>Symptoms:</h2>
              <div className='bottom-section-images'>
                <div className='images-next'>
                  <img src='./images/wg.png' alt='' />
                  <h2>Weight Gain</h2>
                </div>
                <div className='images-next'>
                  <img src='./images/fatigue.png' alt='' />
                  <h2>Fatigue</h2>
                </div>
                <div className='images-next'>
                  <img src='./images/dryskin.png' alt='' />
                  <h2>Dry Skin</h2>
                </div>
                <div className='images-next'>
                  <img src='./images/sensitive.png' alt='' />
                  <h2>Sensitive to Cold</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='hero-bottom'>
          <div className='top'>
            <h1>Your Thyroid Pre-Conditions at a Glance</h1>

            <div className='card-wrapper'>
              <HeroCard
                name='Chronic Inflammation'
                img='chronic'
                value='66'
                color='#FFD964'
                text='Moderate'
              />
              <HeroCard
                name='Gut Health'
                img='gut'
                value='33'
                color='#89B08A'
                text='Mild'
              />
              <HeroCard
                name='Metabolic Stress'
                img='metabolic'
                value='90'
                color='#EE5800'
                text='Severe'
              />
              <HeroCard
                name='Nutritional Deficiencies'
                img='nutritional'
                value='57'
                color='#FFD964'
                text='Moderate'
              />
              <HeroCard
                name='Genetics & Environment'
                img='genetics'
                value='58'
                color='#FFD964'
                text='Moderate'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
