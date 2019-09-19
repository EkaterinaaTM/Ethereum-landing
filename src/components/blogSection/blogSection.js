import React, { useState } from 'react';

import SectionTitle from '../sectionTitle/sectionTitle';
import Button from '../Button/Button';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import data from '../../data.js';

const BlogSection = () => {
  const [ activeSlide, setActiveSlide ] = useState(0);

  const togglActiveSlider = (e) => {
    activeSlide === 83 ? setActiveSlide(0) : setActiveSlide(activeSlide + 16.6);
  }
  const settings = {
    dots: false,
    infinite: true,
    arrows: false, 
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: togglActiveSlider
  };

  return (
    <section className='wrapper'>
      <SectionTitle
        title='Stay <span>current</span>'
        subtitle='Stay up to date with Ethereum Classic news. Check out some of our most recent announcements and posts below.'
        subtitleClass='subtitle_text--short'/>

      <div className='flex-row--between'>
        <Slider {...settings}>
          {data.blog.map(post => <Post {...post} /> )}
        </Slider>
      </div>

      <div className='flex-row--center'>
        <div className='blog_slider'>
          <div className='blog_slider-active' style={{ left: `${activeSlide}%` }} />
        </div>
      </div>

    </section>
  )
};

const Post = ({ img, title, date, link }) => (
    <div className='blog_item text-block--justify'> 
      <img src={img} className='blog_img'/>
      <h4 className='title_h4' dangerouslySetInnerHTML={{ __html: title }}/>
      <p>{date}</p>
      <a href={link} target='_blank'><Button text='Read More' className='button--large--transparent'/></a>
    </div>
);

export default BlogSection;