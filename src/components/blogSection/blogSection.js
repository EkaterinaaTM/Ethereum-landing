import React, { useState } from "react"
import ScrollAnimation from "react-animate-on-scroll"

import SectionTitle from "../sectionTitle/sectionTitle"
import Post from "./post"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import data from "../../data.js"

const BlogSection = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const togglActiveSlider = e => {
    activeSlide === 83 ? setActiveSlide(0) : setActiveSlide(activeSlide + 16.6)
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
    afterChange: togglActiveSlider,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }

  return (
    <section className="wrapper" id="blog">
      <SectionTitle
        title="Stay <span>current</span>"
        subtitle="Stay up to date with Ethereum Classic news. Check out some of our most recent announcements and posts below."
        subtitleClass="subtitle_text--short"
      />

      <div className="flex-row--between">
        <Slider {...settings}>
          {data.blog.map(post => (
            <Post {...post} />
          ))}
        </Slider>
      </div>

      <ScrollAnimation animateIn="fadeIn" duration={2}>
        <div className="flex-row--center">
          <div className="blog_slider">
            <div
              className="blog_slider-active"
              style={{ left: `${activeSlide}%` }}
            />
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}

export default BlogSection
