import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

const SectionTitle = ({ title, subtitle, subtitleClass }) => (
  <div className="title_wrapper">
    <ScrollAnimation animateIn="fadeIn" duration={2}>
      <h2 className="title_h2" dangerouslySetInnerHTML={{ __html: title }} />
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn" duration={2}>
      <p className={subtitleClass}>{subtitle}</p>
    </ScrollAnimation>
  </div>
)

export default SectionTitle
