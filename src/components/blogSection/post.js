import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

import Button from "../Button/Button"

const Post = ({ img, title, date, link }) => (
  <ScrollAnimation animateIn="fadeIn" duration={2}>
    <div className="blog_item text-block--justify">
      <img src={img} className="blog_img" />
      <h4 className="title_h4" dangerouslySetInnerHTML={{ __html: title }} />
      <p>{date}</p>
      <a href={link} target="_blank">
        <Button text="Read More" className="button--lg--transparent" />
      </a>
    </div>
  </ScrollAnimation>
)

export default Post
