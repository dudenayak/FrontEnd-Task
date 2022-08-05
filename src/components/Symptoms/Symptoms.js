import React from 'react';
import './Symptoms.css';
import SymptomsCard from './SymptomsCard.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const Symptoms = () => {
  return (
    <div className='symptoms'>
      <div className='symptoms-heading'>
        <h1>Your Thyroid Pre-Conditions Explained</h1>
      </div>
      <div className='symptoms-wrapper'>
        <div className='symptoms-top'>
          <div className='symptoms-left'>
            <img src='./images/inflammation.png' alt='' />
          </div>
          <div className='symptoms-right'>
            <div className='symptoms-right-bar'>
              <SymptomsCard value='66' color='#FFD964' text='Moderate' />
            </div>
            <div className='symptoms-right-text'>
              <h2>Inflammation </h2>
              <h3>
                Auto-immune conditions or chronic infections can lead to
                inflammation in the body. Your body releases anti-bodies that
                attack the thyroid cells, causing it to make less thyroid
                hormone leading to hypothyroidism.
              </h3>
            </div>
          </div>
        </div>

        <div className='bottom-wrapper-min'>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <div className='symptoms-bottom'>
                <img src='./images/1.png' alt='' />
                <h1>Add anti-inflammatory foods</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='symptoms-bottom'>
                <img src='./images/2.png' alt='' />
                <h1>Practice elimination diet under guidance</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='symptoms-bottom'>
                <img src='./images/3.png' alt='' />
                <h1>Eat nutrient dense foods</h1>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className='bottom-wrapper'>
          <div className='symptoms-bottom'>
            <img src='./images/1.png' alt='' />
            <h1>Add anti-inflammatory foods</h1>
          </div>
          <div className='symptoms-bottom'>
            <img src='./images/2.png' alt='' />
            <h1>Practice elimination diet under guidance</h1>
          </div>
          <div className='symptoms-bottom'>
            <img src='./images/3.png' alt='' />
            <h1>Eat nutrient dense foods</h1>
          </div>
        </div>
      </div>

      <div className='symptoms-wrapper'>
        <div className='symptoms-top'>
          <div className='symptoms-left'>
            <img src='./images/guthealth.png' alt='' />
          </div>
          <div className='symptoms-right'>
            <div className='symptoms-right-bar'>
              <SymptomsCard value='33' color='#89B08A' text='Mild' />
            </div>
            <div className='symptoms-right-text'>
              <h2>Gut Health </h2>
              <h3>
                Irritable bowel, diarrhoea, food intolerances or constipation
                are the biggest signs of leaky gut, i.e. presence of microbes in
                the digestive tract. Gut health and thyroid are closely
                inter-connected as your gut houses the most immune cells in body
              </h3>
            </div>
          </div>
        </div>

        <div className='bottom-wrapper-min'>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <div className='symptoms-bottom'>
                <img src='./images/4.png' alt='' />
                <h1>Avoid Dairy Products</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='symptoms-bottom'>
                <img src='./images/5.png' alt='' />
                <h1>Cut processed / high sugar foods</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='symptoms-bottom'>
                <img src='./images/6.png' alt='' />
                <h1>Eat nutrient dense foods</h1>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className='bottom-wrapper'>
          <div className='symptoms-bottom'>
            <img src='./images/4.png' alt='' />
            <h1>Avoid Dairy Products</h1>
          </div>
          <div className='symptoms-bottom'>
            <img src='./images/5.png' alt='' />
            <h1>Cut processed / high sugar foods</h1>
          </div>
          <div className='symptoms-bottom'>
            <img src='./images/6.png' alt='' />
            <h1>Eat nutrient dense foods</h1>
          </div>
        </div>
      </div>
      <div className='symptoms-wrapper'>
        <div className='symptoms-top'>
          <div className='symptoms-left'>
            <img src='./images/stress.png' alt='' />
          </div>
          <div className='symptoms-right'>
            <div className='symptoms-right-bar'>
              <SymptomsCard value='90' color='#EE5800' text='Severe' />
            </div>
            <div className='symptoms-right-text'>
              <h2>Metabolic Stress </h2>
              <h3>
                Irritable bowel, diarrhoea, food intolerances or constipation
                are the biggest signs of leaky gut, i.e. presence of microbes in
                the digestive tract. Gut health and thyroid are closely
                inter-connected as your gut houses the most immune cells in body
              </h3>
            </div>
          </div>
        </div>

        <div className='bottom-wrapper-min'>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <div className='symptoms-bottom'>
                <img src='./images/7.png' alt='' />
                <h1>Practice deep breathing / meditation</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='symptoms-bottom'>
                <img src='./images/8.png' alt='' />
                <h1>Do yoga & strength excercises</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='symptoms-bottom'>
                <img src='./images/9.png' alt='' />
                <h1>Sleep 7-8 hours to keep stress in check</h1>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className='bottom-wrapper'>
          <div className='symptoms-bottom'>
            <img src='./images/7.png' alt='' />
            <h1>Practice deep breathing / meditation</h1>
          </div>
          <div className='symptoms-bottom'>
            <img src='./images/8.png' alt='' />
            <h1>Do yoga & strength excercises</h1>
          </div>
          <div className='symptoms-bottom'>
            <img src='./images/9.png' alt='' />
            <h1>Sleep 7-8 hours to keep stress in check</h1>
          </div>
        </div>
      </div>
      <div className='symptoms-wrapper'>
        <div className='symptoms-top'>
          <div className='symptoms-left'>
            <img src='./images/deficiency.png' alt='' />
          </div>
          <div className='symptoms-right'>
            <div className='symptoms-right-bar'>
              <SymptomsCard value='57' color='#FFD964' text='Moderate' />
            </div>
            <div className='symptoms-right-text'>
              <h2>Nutritional Deficiencies </h2>
              <h3>
                Common nutritional deficiencies of Vitamin D, Vitamin B12,
                Vitamin A, Vitamin B2, Vitamin C, Magnesium, or Zinc can
                contribute to severity of hypothyroidism.
              </h3>
            </div>
          </div>
        </div>

        <div className='bottom-wrapper-min'>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <div className='symptoms-bottom'>
                <img src='./images/10.png' alt='' />
                <h1>Add supplements to your diet</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='symptoms-bottom'>
                <img src='./images/11.png' alt='' />
                <h1>Include magnesium rich food</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='symptoms-bottom'>
                <img src='./images/12.png' alt='' />
                <h1>Improve dietary fibre intake</h1>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className='bottom-wrapper'>
          <div className='symptoms-bottom'>
            <img src='./images/10.png' alt='' />
            <h1>Add supplements to your diet</h1>
          </div>
          <div className='symptoms-bottom'>
            <img src='./images/11.png' alt='' />
            <h1>Include magnesium rich food</h1>
          </div>
          <div className='symptoms-bottom'>
            <img src='./images/12.png' alt='' />
            <h1>Improve dietary fibre intake</h1>
          </div>
        </div>
      </div>
      <div className='symptoms-wrapper'>
        <div className='symptoms-top'>
          <div className='symptoms-left'>
            <img src='./images/environment.png' alt='' />
          </div>
          <div className='symptoms-right'>
            <div className='symptoms-right-bar'>
              <SymptomsCard value='58' color='#FFD964' text='Moderate' />
            </div>
            <div className='symptoms-right-text'>
              <h2>Genetics & Environment </h2>
              <h3>
                Genetic factors play a role in more than 75% of the thyroid
                cases. Moreover, exposure to toxins like mercury, fluoride and
                fertilizers have been found to affect thyroid function by
                recruiting antibodies to attack the thyroid
              </h3>
            </div>
          </div>
        </div>

        <div className='bottom-wrapper-min'>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <div className='symptoms-bottom'>
                <img src='./images/13.png' alt='' />
                <h1>Limit Toxin Exposure</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='symptoms-bottom'>
                <img src='./images/14.png' alt='' />
                <h1>Cut down plastic use</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='symptoms-bottom'>
                <img src='./images/15.png' alt='' />
                <h1>Sleep 7-8 hours to keep stress in check</h1>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className='bottom-wrapper'>
          <div className='symptoms-bottom'>
            <img src='./images/13.png' alt='' />
            <h1>Limit Toxin Exposure</h1>
          </div>
          <div className='symptoms-bottom'>
            <img src='./images/14.png' alt='' />
            <h1>Cut down plastic use</h1>
          </div>
          <div className='symptoms-bottom'>
            <img src='./images/15.png' alt='' />
            <h1>Sleep 7-8 hours to keep stress in check</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
