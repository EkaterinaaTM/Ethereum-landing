import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

const FeatureBlock = ({ img, desc }) => (
  <ScrollAnimation animateIn="fadeIn" duration={2}>
    <div className="flex-row--center_item ">
      <img src={img} className="flex-row--center_img" />
      <p dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  </ScrollAnimation>
)

export default FeatureBlock
