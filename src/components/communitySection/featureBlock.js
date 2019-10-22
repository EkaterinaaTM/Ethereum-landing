import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

const FeatureBlock = ({ img, title, subtitle }) => (
  <ScrollAnimation animateIn="fadeIn" duration={2}>
    <div className="flex-row--center_item">
      <img src={img} alt="" className="flex-row--center_img" />
      <h3 className="title_h3">{title}</h3>
      <p>{subtitle}</p>
    </div>
  </ScrollAnimation>
)

export default FeatureBlock
