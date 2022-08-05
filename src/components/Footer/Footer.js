import React from 'react';
import '../Footer/Footer.css';
import { Button } from '../Button/Button';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-wrapper'>
        <div className='footer-top'>
          <div className='footer-top-left'>
            <h2>One place for all your Thyroid needs</h2>
            <h4>
              Join live fitness sessions, talk to your Nutrition Coach or
              consult top Thyroid Experts in India, track your Thyroid symptoms,
              watch live webinars & explore Thyroid related content, videos &
              recipes.
            </h4>
          </div>
          <div className='footer-top-right'>
            <img src='./images/phone.png' alt='Phone' />
          </div>
        </div>
        <section className='footer-bottom'>
          <p className='footer-bottom-heading'>
            Have any questions? Book a call with us.
          </p>
          <div className='footer-button'>
            <Button buttonSize='btn-orange--medium' buttonStyle='btn--outline'>
              Talk To Health Coach
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
